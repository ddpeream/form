import { Fragment } from "react";
import { FormComponent } from "../form/form";
import { Tabla } from "../table/table";
import { AppContainer, ContainerGeneral } from "./App";

export default function AppUi() {
  return (
    <Fragment>
      <ContainerGeneral>
        <AppContainer>
          <FormComponent />
          <Tabla />
        </AppContainer>
      </ContainerGeneral>
    </Fragment>
  );
}
