import React, { useState, useEffect, useRef } from 'react';
import { useGetFoodNamesQuery } from './graphql/generated';
import Login from './components/Login/Login';
import Virtualize from './components/VirtualSelect/VirtualSelect';
import FoodItem from './components/FoodItem/FoodItem';
import { useBleScaleValue } from './utils';
import BleScaleConnectButton from './components/BleScaleConnectButton/BleScaleConnectButton';
import BarCodeReader from './components/BarCodeReader/BarCodeReader';
import Modal from '@material-ui/core/Modal';
import Select from './components/Select/Select'



function App() {
  const { data, loading, fetchMore, error } = useGetFoodNamesQuery()
  const [selected, setSelected] = useState<string>("5ecf9cf168be9c812dabc07d")
  const { weight } = useBleScaleValue()
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Login />
      {error && <span>{error.message}</span>}
      <p>Weight: {weight}</p>
      <BleScaleConnectButton />
      <Select
        options={data?.foods ?? []}
        getLabel={food => food.name.fi ?? ""}
        onChange={console.log}
      />
      {selected && <FoodItem id={selected} />}
      <button onClick={() => setOpen(true)}>Open bar code reader</button>

      <Modal open={open} onClose={() => setOpen(false)} >
        <BarCodeReader onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}

export default App;
