import{S as M,i as N,s as F,e as m,t as U,j as K,c as p,a as c,g as y,d,l as T,b as o,f as L,E as i,J as f,U as G,F as D}from"../../chunks/vendor-151c6116.js";function v(_){let e,n,s,r,C,g,a,S,t,u,E,I;return{c(){e=m("div"),n=m("div"),s=m("form"),r=m("h1"),C=U("Reset Password"),g=K(),a=m("input"),S=K(),t=m("button"),u=U("Send Password Reset Link"),this.h()},l(A){e=p(A,"DIV",{class:!0});var P=c(e);n=p(P,"DIV",{class:!0});var O=c(n);s=p(O,"FORM",{});var l=c(s);r=p(l,"H1",{class:!0});var b=c(r);C=y(b,"Reset Password"),b.forEach(d),g=T(l),a=p(l,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),S=T(l),t=p(l,"BUTTON",{type:!0,class:!0});var R=c(t);u=y(R,"Send Password Reset Link"),R.forEach(d),l.forEach(d),O.forEach(d),P.forEach(d),this.h()},h(){o(r,"class","mb-8 text-3xl text-center"),o(a,"id","email"),o(a,"type","email"),o(a,"class","block border border-orange-700 w-full p-3 rounded mb-4"),o(a,"name","email"),a.required="required",o(a,"placeholder","Email"),o(a,"autocomplete","email"),o(t,"type","submit"),o(t,"class","w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"),o(n,"class","bg-white px-6 py-8 rounded shadow-md text-black w-full"),o(e,"class","container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2")},m(A,P){L(A,e,P),i(e,n),i(n,s),i(s,r),i(r,C),i(s,g),i(s,a),i(s,S),i(s,t),i(t,u),E||(I=f(s,"submit",G(w)),E=!0)},p:D,i:D,o:D,d(A){A&&d(e),E=!1,I()}}}async function h({fetch:_}){let e;const n="AIzaSyAMnT4wCNyfX9VyfKd1k-ySulq12thsAY4",r=`https://sheets.googleapis.com/v4/spreadsheets/${{AGSDESKTOPJAVA:"C:\\Program Files (x86)\\ArcGIS\\Desktop10.8\\",ALLUSERSPROFILE:"C:\\ProgramData",ANDROID_HOME:"C:\\Android\\android-sdk",APPDATA:"C:\\Users\\AlanK\\AppData\\Roaming",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"132595662436678945",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_23844_HYGBUPKTHPUKBHIF",CLASSPATH:".;",COLOR:"1",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"MASTER-64",ComSpec:"C:\\Windows\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EDITOR:"notepad.exe",GDAL_DATA:"C:\\Program Files\\PostgreSQL\\13\\gdal-data",GEONETWORK_DB_NAME:"C:\\ProgramData\\GeoNetwork\\gn",GEONETWORK_DIR:"C:\\ProgramData\\GeoNetwork",GEONETWORK_HOME:"C:\\Program Files\\GeoNetwork",GIT_ASKPASS:"c:\\Users\\AlanK\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",GOOGLE_API_KEY:"AIzaSyAMnT4wCNyfX9VyfKd1k-ySulq12thsAY4",HOME:"C:\\Users\\AlanK",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\AlanK",INIT_CWD:"C:\\Users\\AlanK\\Documents\\GitHub\\Strengthening-Our-Community\\mulligans-lane",JAVA_HOME:"C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12",LANG:"en_GB.UTF-8",LOCALAPPDATA:"C:\\Users\\AlanK\\AppData\\Local",LOGONSERVER:"\\\\MASTER-64",NODE:"C:\\Program Files\\nodejs\\node.exe",NODE_ENV:"production",NODE_EXE:"C:\\Program Files\\nodejs\\\\node.exe",NODE_PATH:";C:\\Users\\AlanK\\AppData\\Roaming\\npm\\node_modules\\ndb\\lib\\preload",NPM_CLI_JS:"C:\\Users\\AlanK\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",npm_command:"run-script",npm_config_cache:"C:\\Users\\AlanK\\AppData\\Local\\npm-cache",npm_config_engine_strict:"true",npm_config_globalconfig:"C:\\Users\\AlanK\\AppData\\Roaming\\npm\\etc\\npmrc",npm_config_init_module:"C:\\Users\\AlanK\\.npm-init.js",npm_config_metrics_registry:"https://registry.npmjs.org/",npm_config_node_gyp:"C:\\Users\\AlanK\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",npm_config_noproxy:"",npm_config_prefix:"C:\\Users\\AlanK\\AppData\\Roaming\\npm",npm_config_userconfig:"C:\\Users\\AlanK\\.npmrc",npm_config_user_agent:"npm/7.18.1 node/v16.0.0 win32 x64 workspaces/false",npm_execpath:"C:\\Users\\AlanK\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",npm_lifecycle_event:"build",npm_lifecycle_script:"rimraf  build && env-cmd svelte-kit build && touch build/.nojekyll || type NUL > build/.nojekyll",npm_node_execpath:"C:\\Program Files\\nodejs\\node.exe",npm_package_json:"C:\\Users\\AlanK\\Documents\\GitHub\\Strengthening-Our-Community\\mulligans-lane\\package.json",npm_package_name:"mulligans-lane",npm_package_version:"0.0.1",NPM_PREFIX_NPM_CLI_JS:"C:\\Users\\AlanK\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",NUMBER_OF_PROCESSORS:"6",OneDrive:"C:\\Users\\AlanK\\OneDrive",OneDriveConsumer:"C:\\Users\\AlanK\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"C:\\Users\\AlanK\\Documents\\GitHub\\Strengthening-Our-Community\\mulligans-lane\\node_modules\\.bin;C:\\Users\\AlanK\\Documents\\GitHub\\Strengthening-Our-Community\\node_modules\\.bin;C:\\Users\\AlanK\\Documents\\GitHub\\node_modules\\.bin;C:\\Users\\AlanK\\Documents\\node_modules\\.bin;C:\\Users\\AlanK\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Users\\AlanK\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\AlanK\\Documents\\GitHub\\Strengthening-Our-Community\\mulligans-lane\\node_modules\\.bin;C:\\Users\\AlanK\\Documents\\GitHub\\Strengthening-Our-Community\\node_modules\\.bin;C:\\Users\\AlanK\\Documents\\GitHub\\node_modules\\.bin;C:\\Users\\AlanK\\Documents\\node_modules\\.bin;C:\\Users\\AlanK\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Users\\AlanK\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Python39\\Scripts\\;C:\\Python39\\;C:\\Mapserver-7-4-3;C:\\Mapserver-7-4-3\\bin\\curl\\;C:\\ProgramData\\chocolatey\\bin;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\osm2pgsql;C:\\Program Files\\RedHat\\java-1.8.0-openjdk-1.8.0.252-2\\bin;C:\\Program Files\\RedHat\\java-1.8.0-openjdk-1.8.0.252-2\\jre\\bin;C:\\Python38\\Scripts;C:\\Program Files\\PostgreSQL\\12\\bin;C:\\Python38;C:\\Program Files\\dotnet\\;C:\\flutter_windows_1.20.3-stable\\flutter\\bin;C:\\PostGREST;C:\\Users\\AlanK\\.cargo\\bin;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Program Files (x86)\\dotnet\\;C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\bin;C:\\Program Files\\Java\\jdk1.8.0_211\\bin;C:\\Android\\android-sdk\\tools;C:\\Android\\android-sdk\\platform-tools;C:\\Android\\android-sdk\\tools\\bin;C:\\Program Files\\nodejs\\;C:\\Program Files\\FME\\;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Program Files\\Git\\cmd;C:\\Users\\AlanK\\scoop\\shims;C:\\Users\\AlanK\\.cargo\\bin;C:\\Users\\AlanK\\AppData\\Local\\Programs\\Python\\Python38\\Scripts\\;C:\\Users\\AlanK\\AppData\\Local\\Programs\\Python\\Python38\\;C:\\Users\\AlanK\\AppData\\Local\\Programs\\Python\\Launcher\\;C:\\Users\\AlanK\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\AlanK\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\AlanK\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\AlanK\\.dotnet\\tools;C:\\Users\\AlanK\\AppData\\Roaming\\npm;C:\\Program Files (x86)\\GitHub CLI\\;C:\\Program Files (x86)\\Sophos\\Sophos SSL VPN Client\\bin",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW",POSTGIS_ENABLE_OUTDB_RASTERS:"1",POSTGIS_GDAL_ENABLED_DRIVERS:"GTiff PNG JPEG GIF XYZ DTED USGSDEM AAIGrid",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 158 Stepping 13, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"9e0d",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJ_LIB:"C:\\Program Files\\PostgreSQL\\13\\share\\contrib\\postgis-3.1\\proj",PROMPT:"$P$G",PSModulePath:"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",SHEET_ID:"1zFUF05HJbf3nbOvcxSU2B_tbNWZ9I2z6pe5KnKPzX7I",SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzE5MzIzOCwiZXhwIjoxOTQyNzY5MjM4fQ.AFibbQXFIrqWux9x1oLm5_pzviAAoO7CSr8gADUdJkI",SUPABASE_URL:"https://dlesnsqsssibdwrcckyc.supabase.co",SystemDrive:"C:",SystemRoot:"C:\\Windows",TEMP:"C:\\Users\\AlanK\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.63.2",TEST_ENV_VARIABLE:"Environment variable is coming across",TMP:"C:\\Users\\AlanK\\AppData\\Local\\Temp",USERDOMAIN:"MASTER-64",USERDOMAIN_ROAMINGPROFILE:"MASTER-64",USERNAME:"AlanK",USERPROFILE:"C:\\Users\\AlanK",VITE_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzE5MzIzOCwiZXhwIjoxOTQyNzY5MjM4fQ.AFibbQXFIrqWux9x1oLm5_pzviAAoO7CSr8gADUdJkI",VITE_SUPABASE_URL:"https://dlesnsqsssibdwrcckyc.supabase.co",VITE_SVELTEKIT_AMP:"",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\AlanK\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\AlanK\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-c42f58f7a4-sock",windir:"C:\\Windows"}.SPREADSHEET_ID}?fields=properties.title,sheets.properties.title&key=${n}`;console.log(n),console.log(r);try{e=await _(r),e=await e.json(),console.log(e)}catch(C){console.log(C)}return{props:{survey:e}}}async function w(){await supabase.auth.signIn({email:"example@email.com",password:"example-password"})}function x(_,e,n){return[h]}class H extends M{constructor(e){super();N(this,e,x,v,F,{surveyResult:0})}get surveyResult(){return h}}export{H as default};
