import React from 'react'
import { Card } from 'react-bootstrap'

export default function TitleCard() {
  return (
      <Card bg="info" text="dark" className="m-3 p-2 align-items-center">
        <h1>Hello There!</h1>
        <h2>Type in the Search Bar to see results</h2>
        <h2>Eg: "Running", "Gym"</h2>
      </Card>
  )
}
