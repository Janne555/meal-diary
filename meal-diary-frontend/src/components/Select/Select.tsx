import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { AutocompleteRenderGroupParams, createFilterOptions } from '@material-ui/lab/Autocomplete';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import { Typography, CircularProgress } from '@material-ui/core';
import matchSorter from 'match-sorter'
import throttle from 'lodash/throttle'

const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
    },
  });
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
  const ref = React.useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement>(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child: React.ReactNode) => {
    if (React.isValidElement(child) && child.type === ListSubheader) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

const useStyles = makeStyles({
  listbox: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
});

const renderGroup = (params: AutocompleteRenderGroupParams) => [
  <ListSubheader key={params.key} component="div">
    {params.group}
  </ListSubheader>,
  params.children,
];

type Props<TOption> = {
  options: TOption[]
  getLabel: (option: TOption) => string
  onChange: (option: TOption | null) => void
}

function Select<TOption>({ options, getLabel, onChange }: Props<TOption>) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [loading, setLoading] = useState(true)
  const [filteredOptions, setFilteredOptions] = useState(options)
  const filterOptions = useCallback(throttle(
    async (searchValue: string, options: TOption[]) => {
      setFilteredOptions(matchSorter(options, searchValue, {
        keys: [item => getLabel(item)]
      }))
    }
    , 500, { trailing: true }), [getLabel])

  useEffect(() => {
    (async () => {
      setOpen(false)
      await filterOptions(inputValue, options)
      setOpen(true)
    })()
  }, [options, filterOptions, inputValue])


  return (
    <Autocomplete
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      loading={loading}
      onChange={(e, option) => onChange(option)}
      classes={classes}
      style={{ width: 300 }}
      disableListWrap
      ListboxComponent={ListboxComponent as React.ComponentType<React.HTMLAttributes<HTMLElement>>}
      renderGroup={renderGroup}
      options={options}
      getOptionSelected={(option, value) => getLabel(option) === getLabel(value)}
      getOptionLabel={getLabel}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={e => setInputValue(e.target.value)}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(option) => <Typography noWrap>{getLabel(option)}</Typography>}
    // filterOptions={(options, { inputValue }) => matchSorter(options, inputValue, { keys: [item => getLabel(item)], threshold: matchSorter.rankings.ACRONYM })}
    />
  )
}

export default Select