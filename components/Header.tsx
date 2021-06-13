import React, {useState} from "react";
import styled from "styled-components";
import Link from "next/link";
import palette from "../styles/palette";
import useModal from "../hooks/useModal";
import { useDispatch, useSelector } from 'react-redux';
import HamburgerIcon from "../public/static/svg/header/hamburger.svg";
import { setAuthMode } from "../reducers/auth";
import AuthModal from "./auth/AuthModal";
import OutsideClickHandler from "react-outside-click-handler";
import {LOG_OUT_REQUEST} from "../reducers/user";

// import HeaderAuths from "./HeaderAuths";
// import HeaderUserProfile from "./HeaderUserProfile";

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;
  .header-logo-wrapper {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 30px;
  }
  .header-auth-buttons {
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      font-weight: 600;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      font-weight: 600;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }
  .header-user-profile {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 0 6px 0 16px;
    border: 0;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 21px;
    background-color: white;
    cursor: pointer;
    outline: none;
    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
    }
    .header-user-profile-image {
      margin-left: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  .header-logo-wrapper + div {
    position: relative;
  }

  .header-usermenu {
    position: absolute;
    right: 0;
    top: 52px;
    width: 240px;
    padding: 8px 0;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background-color: white;
    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 42px;
      padding: 0 16px;
      cursor: pointer;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .header-usermenu-divider {
      width: 100%;
      height: 1px;
      margin: 8px 0;
      background-color: ${palette.gray_dd};
    }
  }
`;

const Header: React.FC = () => {
    const isLogged = useSelector((state: any) => state.user.isLogged);
    const userProfileImage = useSelector((state: any) => state.user.profileImage);
    const { openModal, ModalPortal, closeModal } = useModal();
    //* 유저메뉴 열고,닫힘 여부
    const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);

    const dispatch = useDispatch();

    //* 로그아웃 하기
    const logout = () => {
        try {
            dispatch({
                type: LOG_OUT_REQUEST
            });
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <Container>
            <Link href="/">
                <a className="header-logo-wrapper">
                    bearTrip
                </a>
            </Link>
            {!isLogged && (
                <div className="header-auth-buttons">
                    <button
                        className="header-sign-up-button"
                        type="button"
                        onClick={() => {
                            dispatch(setAuthMode("signup"));
                            openModal();
                        }}
                    >
                        회원가입
                    </button>
                    <button
                        className="header-login-button"
                        type="button"
                        onClick={() => {
                            dispatch(setAuthMode("login"));
                            openModal();
                        }}
                    >
                        로그인
                    </button>
                </div>
            )}
            {isLogged && (
                <OutsideClickHandler
                    onOutsideClick={() => {
                        if (isUsermenuOpened) {
                            setIsUsermenuOpened(false);
                        }
                    }}
                >
                    <button
                        className="header-user-profile"
                        type="button"
                        onClick={() => setIsUsermenuOpened(!isUsermenuOpened)}
                    >
                        <HamburgerIcon />
                        <img
                            src={userProfileImage}
                            className="header-user-profile-image"
                            alt=""
                        />
                    </button>
                    {isUsermenuOpened && (
                        <ul className="header-usermenu">
                            <li>숙소 관리</li>
                            <Link href="/room/register/building">
                                <a
                                    role="presentation"
                                    onClick={() => {
                                        setIsUsermenuOpened(false);
                                    }}
                                >
                                    <li>숙소 등록하기</li>
                                </a>
                            </Link>
                            <div className="header-usermenu-divider" />
                            <li role="presentation" onClick={logout}>
                                로그아웃
                            </li>
                        </ul>
                    )}
                </OutsideClickHandler>
            )}
            <ModalPortal>
                <AuthModal closeModal={closeModal} />
            </ModalPortal>
            {/*<HeaderAuths />*/}
            {/*<HeaderUserProfile />*/}
        </Container>
    );
};

export default Header;
