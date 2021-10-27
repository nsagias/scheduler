import React from "react";

import { storiesOf } from "@storybook/react";
import { action, ADDON_ID } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

storiesOf("DayListItem", module)
    .addParameters({
      backgrounds: [{name: "dark", value: "#222f3e", default: true}]
    })
    .add("Unselected", ()=> <DayListItem name="Monday" spots={1} />)
    .add("Selected", ()=> <DayListItem name="Monday" spots={1} selected/>)
    .add("Full", ()=> <DayListItem name="Monday" spots={1} />)
    .add("Clickable", ()=> (
       <DayListItem 
         name="Tuesday" 
         setDay={action('setDay')} 
         spots={5} />
    ));