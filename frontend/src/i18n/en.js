/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import enLocale from 'element-plus/lib/locale/lang/en';

const en = {
  [enLocale.name]: {
    el: enLocale.el,
    about: {
      'line-2': 'About Us',
      'line-3': 'Visual Management Tool Of IoTDB',
      'line-4': `IoTDB Admin Is A GUI Interface Of IoTDB, Providing All The Adding, Deleting, Altering And Querying Operations. Besides That, Accessing Control Is Also Built. It Extremely Simplifies The Use Of IoTDB And Has Very Little Learning Cost. `,
      'line-5': `IoTDB Is One Of The Best Time Series Database In Our Opinion. We Will Always Try Our Best To Advance The Development And Application Of Time Series Database, Making Contribution To Rise Of Native Open Source Ability And Ecosystem Development.Welcome Everyone Of You To Join Us, Waiting For You! Contact Us:`,
      'line-6-text': 'Scan Wechat',
      'line-7': 'Version: 0.12',
      'back-btn': 'Return To Work Page',
    },
    common: {
      submit: 'Submit',
      cancel: 'Cancel',
      detail: 'Detail',
      delete: 'Delete',
      edit: 'Edit',
      operation: 'Operation',
      save: 'Save',
      clear: 'Clear',
      noData: 'No Data',
      tip: 'Tips',
      deleteSuccess: 'Delete Success',
      add: 'Add',
      placeHolder: 'Please Input',
      selectPlaceholder: 'Please Select',
      survival: 'Survival',
      death: 'Death',
      port: 'Prot',
      refresh: 'Refresh',
      startTime: 'Start Time',
      endTime: 'End Time',
      all: 'All',
      success: 'Success',
      fail: 'Fail',
      query: 'Query',
    },
    databasem: {
      newStoreGroup: 'New Storage Group',
      query: 'Query',
      newDevice: 'New Entity',
      newQuery: 'New Query',
    },
    rootPage: {
      chinalang: 'Chinese',
      englishlang: 'English',
      deutsch: 'German',
      loginoutText: 'Login Out',
      about: 'About Us',
      help: 'Help Book',
      databaseManagement: 'Database Management',
      dataList: 'Data List',
      newdatasource: 'Data Source',
      newQueryWindow: 'Query',
      nodatasource: 'It Is Has No Data Source At Present, Please',
      feedback: 'Problem Feedback',
      monitorManagement: 'Monitor Management',
    },
    loginPage: {
      account: 'Account',
      password: 'Password',
      placeholderAccount: 'Please Input Account',
      placeholderPassword: 'Please Input Password',
      forgetPassWord: 'Forget Password',
      signIn: 'Sign In',
      forgetPassword: 'Forget Password',
      forgetPasswordTip: 'Please Contact System Administrator',
      accountEmptyTip: 'Account Can Not Be Empty',
      accountContentTip: 'The User Name Must Be Made Up Of Letters, Numbers, Underscores, And Cannot Start With Numbers And Underscores',
      accountLengthTip: 'The User Name Must Be Greater Than Or Equal To 3 Characters And Less Than Or Equal To 32 Characters',
      passwordEmptyTip: 'Password Can Not Be Empty',
      passwordLenghtTip: 'Password Must Be Greater Than Or Equal To 6 Digits. Please Check The Number Of Digits',
      welcomeLogin: 'Welcome To IoTDB Admin',
      loginErrorTip: 'Incorrect User Name Or Password, Please Re-enter',
    },

    sourcePage: {
      alias: 'Connection',
      host: 'Host',
      port: 'Port',
      storageNum: 'Storage Group Number',
      entityNum: 'Entity Number',
      physicalNum: 'Physical Number',
      dataNum: 'Data Number',
      username: 'Username',
      password: 'Password',
      addDialogTitle: 'New Source',
      editDialogTitle: 'Edit Source',
      eg: 'Example:127.0.0.1',
      aliasEmptyTip: 'Connection Can Not Be Empty',
      hostEmptyTip: 'Host Can Not Be Empty',
      hostErrorTip: 'Host Pattern Is Incorrect',
      portErrorTip: 'port pattern is incorrect',
      newUserEmptyTip: 'Username Can Not Be Empty',
      newPasswordTip: 'Password Can Not Be Empty',
      newUserErrorTip: 'Please Input Right Pattern',
      newUserErrorTip1: 'The Length Of User Name Must Be Contain With 4~255',
      newpasswordErrorTip1: 'The Length Of Password Must Be Contain With 4~255',
      aliasErrorTip: 'The Length Of Connection Must Be Contain With 3~100',
      portEmptyTip: 'Port Can Not Be Empty',
      usernameEmptyTip: 'Username Can Not Be Empty',
      passwordEmptyTip: 'Password Can Not Be Empty',
      userAccount: 'User Account',
      newAccount: 'New Account',
      baseConfig: 'Base Config',
      accountPermit: 'Account Rights',
      permitPermission: 'Permit Permission',
      permitTips: 'After Check The [LIST_USER], You Can Make The [CREATE_USER]、[DELETE_USER]、[MODIFY_PASSWORD] Take Effect',
      dataModel: 'Data Model',
      accountPermitLabel: 'Account Permission',
      accountRole: 'User Role',
      userNameTitle: 'Username',
      passwordTitle: 'Password',
      roleTitle: 'User Role',
      roleList: 'Role List',
      checkedList: 'Checked Role List',
      groupInfo: 'Group Info',
      groupName: 'Group Name',
      description: 'Description',
      line: 'Line',
      path: 'Path',
      range: 'Range',
      func: 'Function',
      selectPermissions: 'Select Permissions',
      selectAlias: 'Connection',
      selectGroup: 'Group',
      selectDevice: 'Entity',
      selectTime: 'Time Series',
      createGroup: 'SET_STORAGE_GROUP',
      createUser: 'CREATE_USER',
      deleteUser: 'DELETE_USER',
      editPassword: 'MODIFY_PASSWORD',
      listRole: 'LIST_ROLE',
      deleteRole: 'DELETE_ROLE',
      grantRolePrivilege: 'GRANT_ROLE_PRIVILEGE',
      revertRolePrivilege: 'REVOKE_ROLE_PRIVILEGE',
      listUser: 'LIST_USER',
      grantPrivilege: 'GRANT_USER_PRIVILEGE',
      revertPrivilege: 'REVOKE_USER_PRIVILEGE',
      revokeUserRole: 'REVOKE_USER_ROLE',
      grantUserRole: 'GRANT_USER_ROLE',
      createRole: 'CREATE_ROLE',
      createTimeSeries: 'CREATE_TIMESERIES',
      insertTimeSeries: 'INSERT_TIMESERIES',
      readTimeSeries: 'READ_TIMESERIES',
      deleteTimeSeries: 'DELETE_TIMESERIES',
      createTrigger: 'CREATE_TRIGGER',
      uninstallTrigger: 'DROP_TRIGGER',
      startTrigger: 'START_TRIGGER',
      stopTrigger: 'STOP_TRIGGER',
      createFunction: 'CREATE_FUNCTION',
      uninstallFunction: 'DROP_FUNCTION',
      test: 'Connection Test',
      testBtnLabel: 'Test',
      testResult: 'Connection Test Passed',
      noAuthTip: 'You Have No Right To Take This Operation At Present',
      addAuthBtn: 'Add Auth',
      modifySuccessLabel: 'You Have Modify Password Successful',
      addSuccessLabel: 'You Have Create User Successful',
      editSuccessLabel: 'You Have Edit User Successful',
      deleteUserSuccessLabel: 'You Have Delete User Successful',
      addFirstLabel: 'Please Do Create User Present First',
      deleteAuthLabel: 'You Have Delete Authorition Successful',
      operateAuthLabel: 'You Have Operate Authorition Successful',
      deleteGroupLabel: 'You Have Delete Group Successful',
      newGroupSuccessLabel: 'You Have New Or Edit Group Successful',
      deleteAuthConfirm: 'Are You Sure To Delete This Auth?',
      deleteSourceConfirm: 'Are You Sure To Delete This Source?',
      deleteUserConfirm: 'Are You Sure To Delete This User?',
      deleteRoleConfirm: 'Are You Sure To Delete This Role?',
      newSourceSuccessLabel: 'You Have New Or Edit Source Successful',
      addAuthFirstLabel: 'Please Do Auth Add Present First',
      authTips: 'Attention Please: After Check The [LIST_USER], You Can Make The [CREATE_USER]、[DELETE_USER]、[MODIFY_PASSWORD]、[GRANT_USER_PRIVILEGE]、[REVOKE_USER_PRIVILEGE] Take Effect',
      submitRangeTips: 'Range Must Not Be Empty',
      submitTypeTips: 'Type Must Not Be Empty',
      submitPrivilegesTips: 'Function Must Not Be Empty',
      groupNameLabel: 'Group:',
      deviceNameLabel: 'Entity:',
      timeNameLabel: 'Timeseries:',
      ttlErrorTips: 'Ttl Must Be An Positive Integer',
      maxErrorTips: 'Ttl Must Be Less Than 9007199254740992',
      addRole: 'Add Role',
      dataManagePrivilege: 'Data Manage Privilege',
      roleName: 'Role Name',
      roleDescription: 'Role Description',
      grantUserPrivilege: 'Grant User Privilege',
      addUser: 'Add User',
      inputRoleNameTip: 'Please Enter A Role Name Of More Than 4 Characters',
      inputRoleDescTip: 'Please Enter Role Description',
      roleNameLengthError: 'Insufficient Role Length',
      roleNameExistError: 'Role Already Exists',
      grantUser: 'Authorized User',
      userList: 'User List',
      selectedUser: 'Selected Users',
      showMore: 'Show More',
      nextPage: 'Next Page',
      prePage: 'Pre Page',
      successEditPermit: 'You Have Success Edit Permission',
      userRelevance: 'User Relevance',
      roleRelevance: 'Role Relevance',
      udf: 'UDF',
      trigger: 'Trigger',
      addPermission: 'Add Permission',
      editPermission: 'Add Permission',
      selectdataconnection: 'Please Select A Storage Group',
      selectEntity: 'Please Select An Entity',
      selectTimeseries: 'Please Select Physical Quantity',
      selectRange: 'Please Select A Data Range',
      selectPermission: 'Please Select Permission',
      addRoleTip: 'Please Complete The Adding Operation First',
      confirmDelete: 'Confirm Deletion?',
      roleNameLimit1: 'The Name Cannot Be A Pure Number',
      roleNameLimit2: 'Name Already Exists',
      allMeasurement: 'Alle physikalischen Größen',
      addPrivilegeSuccess: 'Successfully added permission',
      editPrivilegeSuccess: 'Edit permission succeeded',
      editSucceed: 'Edit succeeded',
      createdSucceed: 'Created successfully',
      allStorageGroups: 'All storage groups',
      allDevices: 'All devices',
    },
    storagePage: {
      alias: 'Connection',
      creator: 'Creator',
      createTime: 'CreateTime:',
      ttl: 'Ttl:',
      description: 'Description',
      deviceName: 'Entity Name:',
      newDevice: 'New Entity',
      line: 'Line',
      measurement: 'measurement',
      operation: 'Operation',
      millsSecondLabel: 'millisecond',
      secondLabel: 'Second',
      minuteLabel: 'Minute',
      hourLabel: 'Hour',
      dayLabel: 'Day',
      weekLabel: 'Week',
      monthLabel: 'Month',
      yearLabel: 'Year',
      groupName: 'Group Name:',
      groupDescription: 'Group Description:',
      tips: 'Tips:It Means That Ttl Will Infinite If You Do Not Fill',
      ttlErrTips: 'Ttl And Ttl Unit Must Be Exist At The Same Time',
      groupNamePlaceholder: 'Please Input Group Name,Eg:factory.robotA',
      groupNameLengthTips: 'The Length Of Group Name Must Be Contain With 0~255',
      descriptionLengthTips: 'The Length Of Group Name Must Be Contain With 0~100',
      deleteGroupConfirm: 'Are You Sure To Delete This Group?',
      deleteDeviceConfirm: 'This Operation Will Lead To The Deletion Of The Device Could Not Be Resumed, Confirmed To Delete?',
    },
    device: {
      measurement: 'physikalische Menge',
      serchPy: 'Please Input The Measuring Metrics',
      dataconnection: 'Data Connection',
      selectdataconnection: 'Please Select Save Group',
      selectdataconnections: 'Please Select Data Connections',
      devicename: 'Entity Name',
      description: 'Entity Description',
      group: 'Storage Group',
      physical: 'Physical Metrics',
      addphysical: 'Add Physical Metrics',
      delete: 'Delete',
      creator: 'Creator',
      createTime: 'CreateTime',
      newValue: 'New Value',
      deletecontent1: 'Are You Sure You Want To Delete',
      deletecontent2: 'After Deletion, The Data Will Be Lost And Cannot Be Recovered',
      cencel: 'Cancel',
      ok: 'Ok',
      physicalname: 'Metrics',
      datatype: 'Data Type',
      codingmode: 'Coding Mode',
      physicaldescr: 'Description Of Metrics',
      action: 'Operation',
      datatrends: 'Data Trends',
      datatrend: 'Trend Of Physical Quantity Data',
      time: 'Date',
      look: 'Look',
      inputdevice: 'Please Enter Entity Level Path',
      inputdecr: 'Please Enter Entity Description',
      pyname: 'Physical Quantities Must Be Composed Of Words, Numbers And Underscores',
      pynamel: 'The Physical Quantity Must Be Composed Of Words, Numbers And Underscores. The Physical Quantity Must Be 0 Characters And 255 Characters',
      pynamecopy: 'Duplicate Physical Quantity Name, Please Modify',
      deletetitle: 'Successfully Deleted',
      canceldeletion: 'Cancel Deletion',
      addpydataa: 'Add Up To 2000 Pieces Of Data',
      tips: 'Tips',
      pleaseinput: 'Please Fill In The Name Of Physical Metrics',
      selectdata: 'Data Yype Must Be Selected For Physical Metrics',
      savesuccess: 'Saved Successfully',
      minphysical: 'The Physical Quantity Cannot Be 0',
      must: 'Please Enter The Required Content',
      newquery: 'New Query',
      inputfunction: 'Please Enter A Function Name',
      selectp: 'Please Select Entity',
      deleteSuccess: 'Delete Success',
      selectdatatype: 'Please Select Data Type',
      tag: 'Tag',
      attributes: 'Attributes',
      compressionMode: 'Compression Mode',
      alias: 'Alias',
      dataNum: 'Total Data (Piece)',
      editTimeseries: 'Edit Timeseries',
      inputTip: 'Please Input',
      selectTip: 'Please Choose',
      entityStructure: 'Entity Structure',
      dataPreview: 'Data Preview',
      addData: 'Add Data',
      exportData: 'Export Data',
      randomGeneration: 'Random Generation',
      batchImport: 'Batch Import',
      templateDownload: 'Template Download',
      downloadTemplate: 'Download Template',
      fileUpload: 'File Upload',
      uploadTip: 'Only CSV Ormat Files Are Supported',
      uploading: 'Uploading：',
      editData: 'Edit Data',
      deleteSingleDataTip: 'Are You Sure To Delete The Selected Data',
      exportSucceeded: 'Export Succeeded',
      screenPhysical: 'Physical Quantity Screening',
      timeRange: 'Time Frame',
      startTime: 'Start Time',
      endTime: 'End Time',
      randomData: 'Random Data',
      randomTip: 'Tip: Data With The Same Timestamp Will Be Overwritten',
      importResult: 'Batch Import Results:',
      step: 'Step',
      generatedQuantity: 'Generated Quantity',
      stepTip: 'Please Enter The Step Size',
      stepErrorTip: 'Please Enter A Positive Integer',
      generateTip: 'Please Enter The Generated Quantity',
      generateErrorTip: 'Limited To 1 Million',
      uploadedNum: 'Total Uploads',
      successNum: 'Number Of Successes',
      failedNum: 'Number Of Failures',
      deleteTip: 'Please Select Data First',
      all: 'All',
      chooseDate: '选择时间',
      startDateTip: 'Please select a start time',
    },
    sqlserch: {
      Aggregate: 'Aggregate',
      math: 'Math',
      string: 'String',
      select: 'Select',
      sum: 'Trend Calculation',
      date: 'Date',
      count: 'Count The Number Of Time Series',
      avg: 'Average Value Of Time Series Data',
      sum1: 'Sum Of Time Series Data',
      fristvalue: 'First Inserted Data Value',
      lastvalue: 'Latest Inserted Data Value',
      minvalue: 'Minimum Data Value',
      maxvalue: 'Maximum Data Value',
      mintime: 'Minimum Time Stamp',
      maxtime: 'Maximum Time Stamp',
      sin: 'Sine Function',
      cos: 'Cosine Function',
      tan: 'Tangent Function',
      asin: 'Anti Sine Function',
      acos: 'Arccosine Function',
      atan: 'Arctangent Function',
      degress: 'Angle Fegree',
      randians: 'Rotation Radian',
      sing: 'Symbolic Function',
      ceil: 'Round Up',
      floor: 'Round Down',
      round: 'Rounding',
      exp: 'E-based Index',
      ln: 'Logarithm With Base E',
      log10: 'Base 10 Logarithm',
      sqrt: 'Take A Square Root',
      abs: 'Find The Absolute Value',
      string_cont: 'Used To Determine Whether A String Exists In A String',
      string_mat: 'Used To Determine Whether A String Can Ve Matched By A Regular Expression Regex',
      tok: 'Returns The K Data Points With The Largest Median Value In A Time Series',
      bottomk: 'Return The K Data Points With The Minimum Value In A Time Series',
      time_d: 'The Difference Between The Time Stamp Of A Data Point And The Time Stamp Of The Previous Data Point In The Statistical Sequence',
      diff: 'Statistics The Difference Between The Value Of A Data Point And The Value Of The Previous Data Point In The Sequence',
      non: 'The Absolute Value Of The Difference Between The Value Of A Data Point And The Value Of The Previous Data Point In The Statistical Sequence',
      deriv: 'The Rate Of Change Of A Data Point In A Statistical Sequence Relative To The Previous Data Point',
      non_n: 'The Absolute Value Of The Change Rate Of A Data Point Relative To The Previous Data Point In A Statistical Sequence',
      now: 'Now Date',
      save: 'Save',
      run: 'Run',
      stop: 'Stop',
      sqlserchText: 'The Query Is Executed Successfully, And No Data Is Returned',
      sqlrun: 'The Query Is Running. Please Do Not Repeat The Operation',
      type: 'Typ',
      description: 'description',
    },
    standTable: {
      export: 'Export',
      running: 'Running Results',
      download: 'Download',
      maxdownload: 'Download Up To 100000 Pieces Of Data',
      serchtime: 'Query Time',
      queryline: 'Number Of Query Lines',
      function: 'Function',
      data: 'Data',
      savequery: 'Save Query',
      queryname: 'Query Name',
      deleteArry: 'Batch Delete',
      importTip: 'Import Succeeded',
    },
    controlPage: {
      dataList: 'DataList',
      address: 'Host Or IP Address',
      storage: 'Number Of Storage Groups',
      entity: 'Number Of Entities',
      physics: 'Physics',
      total: 'Total Quantity',
      monitor: 'Monitoring Indicators',
      search: 'Query Statistics',
      allMode: 'All Modes',
      devMode: 'Developer Mode',
      opeMode: 'Operator Mode',
      chartBtn: 'Chart Panel',
      listBtn: 'List Panel',
      jvm: 'JVM Metric',
      cpu: 'CPU Metric',
      memory: 'Memory Metric',
      store: 'Store Metric',
      write: 'Write Metric',
      isearch: 'Search Metric',

      iName: 'Metric Name',
      iType: 'Metric Type',
      zxjg: 'Latest Result Occurrence Time',
      zxzb: 'Latest Metric results',
      sql: 'SQL Statement',
      runTime: 'Run Time',
      exeTime: 'Execution Time(s)',
      slowSearch: 'Slow Search',
      lastTime: 'The Last Running Time',
      runCount: 'Running Times',
      querySentence: 'Query Statement',
      exeResult: 'Execution Result',
      downloadLog: 'Download Log',
      totalUseTime: 'Total Time Consumption (ms)',
      garmmarUseTime: 'Grammar Time Consuming (ms)',
      ybyUseTime: 'Pre Compilation Time Consuming (ms)',
      yhbyUseTime: 'Optimizing Compilation Time (ms)',
      exeUseTime: 'Execution Time Consuming (ms)',

      JVMThread: 'JVM Metrics-threads',
      JVMRecycle: 'JVM Metrics-Recycling',
      JVMMemory: 'JVM Metrics-Memory',
      JVMClasses: 'JVM Metrics-Classes',

      selectMetrics: 'Please Select Indicators',

      GCEchart: 'Number Of GC Occurrences And Elapsed Time (Calculated In The Last 15 Minutes)',
      JVMClassEchart: 'Number Of Classes Unloaded/Loaded By The JVM',
      YGCEchart: 'Causes And Time Consuming Of YGC',
      FGCEchart: 'Causes And Time Consuming Of FGC',
      JAVATypeEchart: 'Number Of Java Threads Of Each Type',
      JAVATimeEchart: 'Number Of Java Threads In Each Time Period',
      MemoryEchart: 'Memory Usage Size',
      BufferEchart: 'Cache Usage Size',
      CPUEchart: 'CPU Time Proportion',
      IOEchart: 'Disk I/O Throughput',
      FileCountEchart: 'File Quantity Statistics',
      FileSizeEchart: 'File Size Statistics',
      WriteEchart: 'Write Success And Failure Statistics And Time Consumption',
      SearchEchart: 'Query Success And Failure Statistics',
      ApiEchart: 'Interface Time Consuming',
      ApiQPSEchart: 'Interface QPS',

      fgcCount: 'fgc Times',
      ygcCount: 'ygc Times',
      fgcTime: 'fgc Time Consuming',
      ygcTime: 'ygc Time Consuming',
    },
  },
};

export default en;
