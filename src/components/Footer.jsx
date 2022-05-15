import React from 'react'
import { Card } from 'react-bootstrap'

const style={
    color: 'white',
}

export default function Footer() {
  return (
    <footer >
        <Card className="align-items-center m-3" bg="dark" text="light">
            <h4 style={{style}}>
                <a href="https://github.com/pratik-mahajan/socialboat-final">
                    Github
                </a>
            </h4>
        </Card>
    </footer>
  )
}
