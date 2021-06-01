import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import CloseXIcon from "../../public/static/svg/modal/modal_colose_x_icon.svg";
import MailIcon from "../../public/static/svg/auth/mail.svg";
import PersonIcon from "../../public/static/svg/auth/person.svg";
import OpenedEyeIcon from "../../public/static/svg/auth/opened_eye.svg";
import ClosedEyeIcon from "../../public/static/svg/auth/closed_eye.svg";
import palette from "../../styles/palette";
import Input from "../common/Input";

const Container = styled.form`
  width: 568px;
  padding: 32px;
  background-color: white;
  z-index: 11;

  .mordal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 16px;
  }
  .sign-up-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }

  .sign-up-birthdat-label {
    font-size: 16px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  .sign-up-modal-birthday-info {
    margin-bottom: 16px;
    color: ${palette.charcoal};
  }
  .sign-up-modal-birthday-selectors {
    display: flex;
    margin-bottom: 24px;
    .sign-up-modal-birthday-month-selector {
      margin-right: 16px;
      flex-grow: 1;
    }
    .sign-up-modal-birthday-day-selector {
      margin-right: 16px;
      width: 25%;
    }
    .sign-up-modal-birthday-year-selector {
      width: 33.3333%;
    }
  }
  .sign-up-modal-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${palette.gray_eb};
  }
  .sign-up-modal-set-login {
    color: ${palette.dark_cyan};
    margin-left: 8px;
    cursor: pointer;
  }
`;

const SignUpModal: React.FC = () => {
    const [email, setEmail] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    //*비밀번호 숨김 토글하기
    const toggleHidePassword = useCallback(() => {
        setHidePassword(!hidePassword);
    }, [hidePassword]);


    //* 이메일 주소 변경시
    const onChangeEmail = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
        },
        []
    );

    //* 이름 주소 변경시
    const onChangeLastname = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setLastname(event.target.value);
        },
        []
    );

    //* 성 변경시
    const onChangeFirstname = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setFirstname(event.target.value);
        },
        []
    );

    //* 비밀번호 변경시
    const onChangePassword = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
        },
        []
    );

    return (
        <Container>
            <CloseXIcon className="mordal-close-x-icon"/>
            <div className="input-wrapper">
                <Input
                    placeholder="이메일 주소"
                    type="email"
                    icon={<MailIcon />}
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                />
            </div>
            <div className="input-wrapper">
                <Input
                    placeholder="이름(예:길동)"
                    icon={<PersonIcon />}
                    value={lastname}
                    onChange={onChangeLastname}
                />
            </div>
            <div className="input-wrapper">
                <Input
                    placeholder="성(예: 홍)"
                    icon={<PersonIcon />}
                    value={firstname}
                    onChange={onChangeFirstname}
                />
            </div>
            <div className="input-wrapper sign-up-password-input-wrapper">
                <Input
                    placeholder="비밀번호 설정하기"
                    type={hidePassword ? "password" : "text"}
                    icon={
                        hidePassword ? (
                            <ClosedEyeIcon onClick={toggleHidePassword} />
                        ) : (
                            <OpenedEyeIcon onClick={toggleHidePassword} />
                        )
                    }
                    value={password}
                    onChange={onChangePassword}
                />
            </div>

        </Container>
    );
};

export default SignUpModal;