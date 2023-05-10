declare namespace ApiResponse {
  export interface IDeptData {
    deptCode: string;
    deptManagementFlag: boolean;
    empNo: string;
  }

  export interface IDept {
    code: number;
    data: IDeptData;
    msg: string;
  }

  export interface IMemberList {
    empName: string;
    empNo: number;
    invitUserCount: number;
  }

  export interface ITeamMemberList {
    code: number;
    data: Array<IMemberList>;
    msg: string;
  }

  export interface SortResult extends Array<{_id: string; name: string;}> {}

  export interface Sort {
    result: SortResult;
  }
}
