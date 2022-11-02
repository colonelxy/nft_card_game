/** @format */

import React from "react"

import { PageHOC } from "../components"

const CreateBattle = () => {
    return (
        <div>
            <h1 className="text-white text-xl">Hello from Createbattle</h1>
        </div>
    )
}

export default PageHOC(
    CreateBattle,
    <>
        Create <br /> a new battle
    </>,
    <>Create your battle and wait for other players to join you</>
)