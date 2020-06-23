import React from 'react'
import { useGetFoodQuery } from '../../graphql/generated'
import { CircularProgress } from '@material-ui/core'
import NutritionalComponent from '../NutritionalComponent/NutritionalComponent'
import Typography from '@material-ui/core/Typography';

type Props = {
  id: string
}

function FoodItem({ id }: Props) {
  const { loading, data } = useGetFoodQuery({ variables: { id } })

  if (loading) {
    return <CircularProgress />
  }

  return (
    <div className="food-item">
      <Typography variant="h1">{data?.food?.name.fi}</Typography>
      <div>
        {
          Object.entries(data?.food ?? {})
            .filter(([key]) => !["__typename", "name"].includes(key))
            .map(([key, value]) => (
              <NutritionalComponent key={key} name={key} value={`${value}`} />
            ))
        }
      </div>
    </div>
  )
}

export default FoodItem