import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

type Props = {
  name: string
  value: string
}

export default function NutritionalComponent({ name, value }: Props) {

  return (
    <Card className="nutritional-component">
      <div>
        <img src="images/fuel.svg" />
        <Typography component="h1" >{name}</Typography>
        <Typography>{value}</Typography>
      </div>
    </Card>
  )
}
