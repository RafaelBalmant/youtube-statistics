import React, { useState, useCallback } from 'react';
import LogoMini from "../../../../images/logo_mini.png"
import {
  Menu, ButtonMenu, BodyMenu, HeaderMenu
} from "./style";

function LeftMenu() {

  const [menuState, setMenuState] = useState(false);

  const setMenuStateCallback = useCallback(() => {
    setMenuState(!menuState)
  },[menuState]);

  console.log(menuState)

  return (
    <>
      <Menu menuState={menuState}>
        <span
          className={`
           fas fa-arrow-circle-left
           fa-2x 
           text-white
           float-lg-right m-2
           toggle`}
          onClick={setMenuStateCallback}
        />
        <HeaderMenu menuState={menuState}>
          <img src={LogoMini} width="80px" height="75px"/>
          <h4>YouTube Statistic</h4>
        </HeaderMenu>
        <BodyMenu menuState={menuState}>
          <ul>
            <li>
              <ButtonMenu>
                <div>
                  <i className="fas fa-user mr-2 fa-md"/>
                  <span className="label">Minha Conta</span>
                </div>
              </ButtonMenu>
            </li>
            <li>
              <ButtonMenu>
                <div>
                  <i className="far fa-play-circle mr-2 fa-md"/>
                  <span className="label">Videos</span>
                </div>
              </ButtonMenu>
            </li>
            <li>
              <ButtonMenu>
                <div>
                  <i className="fas fa-video mr-2 fa-md"/>
                  <span className="label">Canais</span>
                </div>
              </ButtonMenu>
            </li>
            <li>
              <ButtonMenu>
                <div>
                  <i className="far fa-file-alt mr-2 fa-md"/>
                  <span className="label">Informações</span>
                </div>
              </ButtonMenu>
            </li>
          </ul>
        </BodyMenu>
      </Menu>
    </>
  );
}

export default LeftMenu;