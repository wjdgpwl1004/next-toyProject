import produce from 'immer';

type RegisterRoomState = {
    largeBuildingType: string | null;
    buildingType: string | null;
    roomType: string | null;
    isSetUpForGuest : boolean | null;
};

//* 초기 상태
const initialState: RegisterRoomState = {
    //* 건물유형 큰 범주
    largeBuildingType: null,
    //* 건물유형
    buildingType: null,
    //* 숙소유형
    roomType: null,
    //* 게스트만을 위해 만들어진 숙소인가
    isSetUpForGuest: null,
};

export const LARGE_BUILDING_TYPE = 'LARGE_BUILDING_TYPE';
export const BUILDING_TYPE = 'BUILDING_TYPE';

export const selectLargeBuildingType = (data: string) => {
  return {
      type: LARGE_BUILDING_TYPE,
      data,
  }
};

export const selectBuildingType = (data: string) => {
    return {
        type: BUILDING_TYPE,
        data,
    }
};


const reducer = (state = initialState, action: any) => produce(state, (draft) => {
    switch (action.type) {
        case LARGE_BUILDING_TYPE:
            if(action.data === "") {
                draft.largeBuildingType = null;
            }
            draft.largeBuildingType = action.data;
            break;
        case BUILDING_TYPE:
            if(action.data === "") {
                draft.buildingType = null;
            }
            draft.buildingType = action.data;
            break;
        default:
            break;
    }
});

export default reducer;