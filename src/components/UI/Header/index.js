import React, { useState, useCallback } from 'react';
import {
  BtnHeader,
  CardHeader,
  DropDownUser,
  UserSection
} from "./style";

function Header() {

  const [userMenuState, setUserMenuState] = useState(false);

  const setUserMenuStateCallback = useCallback(() => {
    setUserMenuState(!userMenuState)
  },[userMenuState]);

  console.log(userMenuState)

  return (
    <>
      <CardHeader>
        <div className="ml-auto">
            <UserSection>
              <BtnHeader
                onClick={setUserMenuStateCallback}
              >
                <span className="fas fa-user mr-1"/>
                CONTA
              </BtnHeader>
              <DropDownUser display={userMenuState}>
                <ul>
                  <li>
                    <button>item1</button>
                  </li>
                  <li>
                    <button>item1</button>

                  </li>
                  <li>
                    <button>item1</button>
                  </li>
                </ul>
              </DropDownUser>
            </UserSection>
        </div>
      </CardHeader>
    </>
  );
}

export default Header;