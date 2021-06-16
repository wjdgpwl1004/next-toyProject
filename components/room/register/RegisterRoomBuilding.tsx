import React, { useMemo } from "react";
import styled from "styled-components";
import palette from "../../../styles/palette";
import { useDispatch, useSelector } from "react-redux";
import {largeBuildingTypeList} from "../../../lib/staticData";
import Selector from "../../common/Selector";
import { selectLargeBuildingType, selectBuildingType } from "../../../reducers/registerRoom";

const Container = styled.div`
  padding: 62px 30px 100px;
  h2 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 56px;
  }
  h3 {
    font-size: 14px;
    font-weight: bold;
    color: ${palette.gray_76};
    margin-bottom: 6px;
  }

  .register-room-building-selector-wrapper {
    width: 320px;
    margin-bottom: 32px;
  }
  .register-room-room-type-radio {
    max-width: 485px;
    margin-bottom: 50px;
  }
  .register-room-is-setup-for-guest-radio {
    margin-bottom: 50px;
  }
`;

//* 선택 불가능 한 큰 범위 건물유형
const disabledlargeBuildingTypeOptions = ["하나를 선택해주세요."];

const RegisterRoomBuilding: React.FC = () => {


    const largeBuildingType = useSelector(
        (state: any) => state.registerRoom.largeBuildingType
    );
    const buildingType = useSelector((state: any) => state.registerRoom.buildingType);

    const dispatch = useDispatch();

    const onChangeLargeBuildingType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(selectLargeBuildingType(event.target.value));
    };

    //* 상세 건물유형 변경시
    const onChangeBuildingType = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        dispatch(selectBuildingType(event.target.value));
    };

    //* 선택된 건물 유형 options
    const detailBuildingOptions = useMemo(() => {
        switch (largeBuildingType) {
            case "아파트": {
                const {
                    apartmentBuildingTypeList,
                } = require("../../../lib/staticData");
               dispatch(selectBuildingType(apartmentBuildingTypeList[0]));
                return apartmentBuildingTypeList;
            }
            case "주택": {
                const { houstBuildingTypeList } = require("../../../lib/staticData");
                dispatch(selectBuildingType(houstBuildingTypeList[0]));
                return houstBuildingTypeList;
            }
            case "별채": {
                const {
                    secondaryUnitBuildingTypeList,
                } = require("../../../lib/staticData");
                dispatch(selectBuildingType(secondaryUnitBuildingTypeList[0]));
                return secondaryUnitBuildingTypeList;
            }
            case "독특한 숙소": {
                const {
                    uniqueSpaceBuildingTypeList,
                } = require("../../../lib/staticData");
                dispatch(selectBuildingType(uniqueSpaceBuildingTypeList[0]));
                return uniqueSpaceBuildingTypeList;
            }
            case "B&B": {
                const { bnbBuildingTypeList } = require("../../../lib/staticData");
                dispatch(selectBuildingType(bnbBuildingTypeList[0]));
                return bnbBuildingTypeList;
            }
            case "부티크호텔": {
                const {
                    boutiquesHotelBuildingTypeList,
                } = require("../../../lib/staticData");
                dispatch(selectBuildingType(boutiquesHotelBuildingTypeList[0]));
                return boutiquesHotelBuildingTypeList;
            }
            default:
                return ["아파트"];
        }
    }, [largeBuildingType]);
    return (
        <Container>
            <h2>등록하실 숙소 종류는 무엇인가요?</h2>
            <h3>1단계</h3>
            <div className="register-room-building-selector-wrapper">
                <Selector
                    type="register"
                    value={largeBuildingType || undefined}
                    defaultValue="하나를 선택해주세요."
                    disabledOptions={disabledlargeBuildingTypeOptions}
                    label="우선 범위를 좁혀볼까요?"
                    options={largeBuildingTypeList}
                    onChange={onChangeLargeBuildingType}
                />
            </div>
            <div className="register-room-building-selector-wrapper">
                <Selector
                    type="register"
                    value={buildingType || undefined}
                    onChange={onChangeBuildingType}
                    disabled={!largeBuildingType}
                    label="건물 유형을 선택하세요."
                    options={detailBuildingOptions}
                />
            </div>
        </Container>
    );
};

export default RegisterRoomBuilding;