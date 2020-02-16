import React, { useState, useCallback } from 'react';
import LogoMini from "../../../../images/logo_mini.png"
import {
  Menu, ButtonMenu, BodyMenu, HeaderMenu,
} from "./style";

function LeftMenu() {

  const [userMenuState, setUserMenuState] = useState(false);

  const setUserMenuStateCallback = useCallback(() => {
    setUserMenuState(!userMenuState)
  },[userMenuState]);

  console.log(userMenuState)

  return (
    <>
      <Menu>
        <HeaderMenu>
          <img src={LogoMini} width="80px" height="75px"/>
          <h4>YouTube Statistic</h4>
        </HeaderMenu>
        <BodyMenu>
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