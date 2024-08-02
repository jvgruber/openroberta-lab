define(["require","exports","util.roberta","message","guiState.model","progHelp.controller","legal.controller","webview.controller","confVisualization","jquery","blockly","notification.controller","connection.controller","program.controller","configuration.controller","user.controller","nn.controller","progList.controller","confList.controller","galleryList.controller","tutorialList.controller","logList.controller","progInfo.controller","aceEditor"],(function(e,o,r,t,n,a,i,s,u,l,g,d,c,m,b,p,f,v,C,h,P,N,y,k){function S(e){var o=!1;for(var r in n.robot.extentions)r===e&&(o=!0);return o}function R(){return"NEPOprog"==n.program.name}function w(){return"WRITE"==n.program.shared||"READ"!=n.program.shared}function T(){return n.configuration.name==O().toUpperCase()+"basis"}function x(){return O().toUpperCase()+"basis"}function E(){return""==n.configuration.name}function L(e){e.serverVersion&&(n.server.version=e.serverVersion,l(".labReleaseVersion").text(n.server.version)),e.robotVersion&&(n.robot.version=e.robotVersion),null!=e.robotFirmwareName?n.robot.fWName=e.robotFirmwareName:n.robot.fWName="",null!=e.robotWait?n.robot.time=e.robotWait:n.robot.time=-1,null!=e.robotBattery?n.robot.battery=e.robotBattery:n.robot.battery="",null!=e.robotName?n.robot.name=e.robotName:n.robot.name="",null!=e.robotState?n.robot.state=e.robotState:n.robot.state="",null!=e.robotSensorvalues?n.robot.sensorValues=e.robotSensorvalues:n.robot.sensorValues="",null!=e.robotNepoexitvalue&&e.robotNepoexitvalue!==n.robot.nepoExitValue&&(n.nepoExitValue=e.robotNepoexitvalue,143!==n.nepoExitValue&&0!==n.robot.nepoExitValue&&t.displayMessage("POPUP_PROGRAM_TERMINATED_UNEXPECTED","POPUP","")),n.user.accountName?(l("#iconDisplayLogin").removeClass("error"),l("#iconDisplayLogin").addClass("ok")):(l("#iconDisplayLogin").removeClass("ok"),l("#iconDisplayLogin").addClass("error")),null!=c.getConnectionInstance()&&void 0!==c.getConnectionInstance()&&c.getConnectionInstance().setState()}function W(){return n.gui.blocklyWorkspace}function D(){return n.gui.bricklyWorkspace}function M(e){var o=re();for(var r in o)if(o[r].name==e&&""!==o[r].group)return e=o[r].group;return e}function U(e){n.gui.runEnabled=e,e?(n.gui.blocklyWorkspace&&n.gui.blocklyWorkspace.robControls.enable("runOnBrick"),n.gui.blocklyWorkspace&&n.gui.blocklyWorkspace.robControls.enable("stopProgram"),l(".menuRunProg, #runSourceCodeEditor").removeClass("disabled")):(n.gui.blocklyWorkspace&&n.gui.blocklyWorkspace.robControls.disable("runOnBrick"),n.gui.blocklyWorkspace&&n.gui.blocklyWorkspace.robControls.disable("stopProgram"),l(".menuRunProg, #runSourceCodeEditor").addClass("disabled"))}function A(){return n.gui.robot}function O(){return n.gui.robotGroup}function V(){for(var e in re())if(re().hasOwnProperty(e)&&re()[e].name==A())return re()[e].realName;return A()}function B(e){return"deprecated"==te()[e].announcement}function G(){return!!c.getConnectionInstance()&&c.getConnectionInstance().isRobotConnected()}function I(){return n.gui.configurationUsed}function F(){return n.gui.view}function _(){return n.gui.prevView}function H(){return n.gui.language}function X(e){e?(l("#menuSaveProg").parent().removeClass("disabled"),l("#menuSaveProg").parent().addClass("disabled"),W().robControls.disable("saveProgram")):K()&&!R()&&w()?(l("#menuSaveProg").parent().removeClass("disabled"),W().robControls.enable("saveProgram")):(l("#menuSaveProg").parent().removeClass("disabled"),l("#menuSaveProg").parent().addClass("disabled"),W().robControls.disable("saveProgram")),n.program.saved=e}function j(e){e||!K()||T()||E()?(l("#menuSaveConfig").parent().removeClass("disabled"),l("#menuSaveConfig").parent().addClass("disabled"),D().robControls.disable("saveProgram")):(l("#menuSaveConfig").parent().removeClass("disabled"),D().robControls.enable("saveProgram")),n.configuration.saved=e}function z(){return n.gui.sourceCodeFileExtension}function K(){return n.user.id>=0}function $(e){var o=e;if(Z()&&"NONE"!==Z()&&q()!==ne()){var r=q(),t=Q(),a=Z(),i="",s="",u="";"Gallery"===r?(i="th-large-outline","READ"===a&&(s=t)):"Roberta"===r?i="roberta":"WRITE"==a?(i="pencil",u='<span style="color:#33B8CA;">'+r+"</span>"):"READ"==a&&(i="eye",u='<span style="color:#33B8CA;">'+r+"</span>"),o+=' <b><span style="color:#33B8CA;" class="typcn typcn-'+i+' progName">'+s+"</span></b>"+u}l("#tabProgramName").html(o),n.program.name=e}function q(){return n.program.owner||ne()}function J(e){n.program.owner=e}function Q(){return n.program.author||ne()}function Y(e){n.program.author=e}function Z(){return n.program.shared}function ee(e){n.program.shared=e}function oe(e){l("#tabConfigurationName").html(e),n.configuration.name=e}function re(){return n.server.robots}function te(){return n.server.robotsByName}function ne(){return n.user.accountName}function ae(){return""!=n.user.userGroup}function ie(){se()?(le()?l("#simMarkerObject").parent().css("display","inline-block"):l("#simMarkerObject").parent().css("display","none"),l("#menuRunSim").parent().removeClass("disabled"),l("#simButton, #simDebugButton").show()):(l("#menuRunSim").parent().addClass("disabled"),l("#simButton, #simDebugButton").hide()),ge()&&l("#simDebugButton").hide(),ue()?(l("#menuRunMulipleSim").parent().removeClass("unavailable"),l("#menuRunMulipleSim").parent().addClass("available"),l("#menuRunMulipleSim").parent().removeClass("disabled")):(l("#menuRunMulipleSim").parent().addClass("unavailable"),l("#menuRunMulipleSim").parent().removeClass("available"),l("#menuRunMulipleSim").parent().addClass("disabled"))}function se(){return 1==n.gui.sim}function ue(){return 1==n.gui.multipleSim}function le(){return 1==n.gui.markerSim}function ge(){return 1==n.gui.webotsSim}function de(){return n.server.tutorial}function ce(){return n.gui.webview||!1}function me(){l("#head-navigation-tutorial").hide();var e=de();for(var o in e)if(e.hasOwnProperty(o)&&e[o].language===H().toUpperCase()){l("#head-navigation-tutorial").show();break}}Object.defineProperty(o,"__esModule",{value:!0}),o.hasExtension=o.setExtensions=o.getLegalTextsMap=o.updateTutorialMenu=o.updateMenuStatus=o.setWebview=o.inWebview=o.getTheme=o.getAvailableHelp=o.getPingTime=o.setPingTime=o.doPing=o.setPing=o.getCommandLine=o.getSignature=o.getVendor=o.getListOfTutorials=o.getWebotsUrl=o.hasWebotsSim=o.hasMarkerSim=o.hasMultiSim=o.hasSim=o.checkSim=o.setConfiguration=o.setProgram=o.setLogout=o.setLogin=o.getUserUserGroupOwner=o.getUserUserGroup=o.isUserMemberOfUserGroup=o.isUserAccountActivated=o.getUserAccountName=o.getUserName=o.isPublicServerVersion=o.getServerVersion=o.setStartWithoutPopup=o.getStartWithoutPopup=o.getConfigurationConf=o.getProgramProg=o.getConfigurationToolbox=o.getProgramToolbox=o.getRobots=o.getProgramXML=o.setProgramXML=o.getConfigurationXML=o.setConfigurationXML=o.setRobotUrl=o.setRobotToken=o.getRobotFWName=o.getConfToolbox=o.getToolbox=o.getProgramToolboxLevel=o.setProgramToolboxLevel=o.setConfigurationNameDefault=o.setConfigurationName=o.getConfigurationName=o.setProgramShareRelation=o.getProgramShareRelation=o.setProgramAuthorName=o.getProgramAuthorName=o.setProgramOwnerName=o.getProgramOwnerName=o.setProgramName=o.getProgramName=o.setProgramTimestamp=o.getProgramTimestamp=o.isUserLoggedIn=o.getBinaryFileExtension=o.getSourceCodeFileExtension=o.getProgramSource=o.setProgramSource=o.getProgramShared=o.setConfigurationSaved=o.isConfigurationSaved=o.setProgramSaved=o.isProgramSaved=o.getLanguage=o.setLanguage=o.getPrevView=o.getView=o.setView=o.hasRobotDefaultFirmware=o.getRobotVersion=o.getRobotState=o.getRobotBattery=o.getRobotName=o.getRobotTime=o.isRobotDisconnected=o.isConfigurationUsed=o.isRobotConnected=o.getRobotInfoEN=o.getRobotInfoDE=o.isRobotBeta=o.getMenuRobotRealName=o.getRobotRealName=o.getRobotPort=o.setRobotPort=o.getRobotGroup=o.getRobot=o.setRunEnabled=o.isRunEnabled=o.setConnectionState=o.findRobot=o.findGroup=o.setKioskMode=o.setRobot=o.setBricklyWorkspace=o.getBricklyWorkspace=o.setBlocklyWorkspace=o.getBlocklyWorkspace=o.setState=o.isKioskMode=o.isConfigurationAnonymous=o.getConfigurationStandardName=o.isConfigurationStandard=o.isProgramWritable=o.isProgramStandard=o.setInitialState=o.init=o.getPluginSim=o.resetDynamicProgramToolbox=o.setDynamicProgramToolbox=o.getRobotDeprecatedData=o.isRobotDeprecated=o.resetRobot=o.getExtensions=o.SHORT=o.LONG=void 0,o.LONG=3e5,o.SHORT=3e3,o.init=function(e,o){var r=l.Deferred();return l.when(n.init()).then((function(){if(n.gui.webview=o||!1,n.gui.webview&&l(".logo").css({right:"32px"}),n.gui.view="start",n.gui.prevView="start",n.gui.language=e,n.gui.startWithoutPopup=!1,n.user.id=-1,n.user.accountName="",n.user.name="",n.robot.name="",n.robot.robotPort="",n.program.toolbox.level="beginner",J(null),Y(null),ee(null),$("NEPOprog"),"default"!==n.server.theme){var t="../theme/"+n.server.theme+".json";l.getJSON(t).done((function(e){n.server.theme=e})).fail((function(e,o){console.error('"'+t+'" is not a valid json file! The reason is probably a',o),n.server.theme="default"}))}r.resolve()})),r.promise()},o.setInitialState=function(){l(".level").removeClass("disabled"),l(".level."+n.program.toolbox.level).addClass("disabled"),"tabProgram"===n.gui.view||"start"===n.gui.view?(l("#head-navigation-configuration-edit").css("display","none"),n.gui.blocklyWorkspace.markFocused()):"tabConfiguration"===n.gui.view&&(l("#head-navigation-program-edit").css("display","none"),n.gui.bricklyWorkspace.markFocused()),l("#menu-"+n.gui.robot).parent().addClass("disabled"),me()},o.setExtensions=function(e){n.robot.extentions=e},o.getExtensions=function(){return n.robot.extentions},o.hasExtension=S,o.isProgramStandard=R,o.isProgramWritable=w,o.isConfigurationStandard=T,o.getConfigurationStandardName=x,o.isConfigurationAnonymous=E,o.isKioskMode=function(){return n.kiosk&&!0===n.kiosk},o.setState=L,o.getBlocklyWorkspace=W,o.setBlocklyWorkspace=function(e){n.gui.blocklyWorkspace=e},o.getBricklyWorkspace=D,o.setBricklyWorkspace=function(e){n.gui.bricklyWorkspace=e},o.setRobot=function(e,o,t){var i=M(e);n.gui.program=o.program,n.gui.configuration=o.configuration,n.gui.sim=o.sim,n.gui.multipleSim=o.multipleSim,n.gui.markerSim=o.markerSim,n.gui.pluginSim=o.pluginSim,n.gui.nnActivations=o.nnActivations,n.gui.webotsSim=o.webotsSim,n.gui.webotsUrl=o.webotsUrl,n.gui.vendor=o.vendor,n.gui.signature=o.signature,n.gui.commandLine=o.commandLine,n.gui.configurationUsed=o.configurationUsed,n.gui.sourceCodeFileExtension=o.sourceCodeFileExtension,n.gui.binaryFileExtension=o.binaryFileExtension,n.gui.firmwareDefault=o.firmwareDefault,l("#blocklyDiv, #bricklyDiv").css("background","url(../../../../css/img/"+i+"Background.jpg) repeat"),l("#blocklyDiv, #bricklyDiv").css("background-size","100%"),l("#blocklyDiv, #bricklyDiv").css("background-position","initial"),I()?u.CircuitVisualization.isRobotVisualized(i,e)&&(l("#bricklyDiv").css("background",""),l("#bricklyDiv").css("background-position",""),l("#bricklyDiv").css("background-size","")):(l("#bricklyDiv").css("background","url(../../../../css/img/"+i+"BackgroundConf.svg) no-repeat"),l("#bricklyDiv").css("background-position","center"),l("#bricklyDiv").css("background-size","75% auto")),l(".robotType").removeClass("disabled"),l(".robotType."+e).addClass("disabled"),l("#head-navi-icon-robot").removeClass("typcn-open"),l("#head-navi-icon-robot").removeClass("typcn-"+n.gui.robotGroup),l("#head-navi-icon-robot").addClass("typcn-"+i),l(".simWindow").removeClass("simWindow-openedButHidden"),ie(),J(null),Y(null),ee(null),t?(oe(i.toUpperCase()+"basis"),$("NEPOprog")):(X(!0),j(!0),M(e)!=O()&&(oe(i.toUpperCase()+"basis"),$("NEPOprog"))),l("#simRobot").removeClass("typcn-"+n.gui.robotGroup),l("#simRobot").addClass("typcn-"+i);var d=!1;M(e)!=O()&&(d=!0),void 0===n.gui.firmwareDefault?l("#robotDefaultFirmware").addClass("hidden"):l("#robotDefaultFirmware").removeClass("hidden"),n.gui.robot=e,n.gui.robotGroup=i;var c=g.Msg.MENU_START_BRICK;c.indexOf("$")>=0&&(c=c.replace("$",V())),l("#menuRunProg").html(c),n.gui.blocklyWorkspace&&n.gui.blocklyWorkspace.robControls.refreshTooltips(V()),d&&(a.initView(),ce()&&(s.setRobotBehaviour(),s.jsToAppInterface({target:"internal",type:"setRobot",robot:i}))),S("nn")?(l("#nn-activations").empty(),l(".tabLinkNN").show(),l.each(n.gui.nnActivations,(function(e,o){l("#nn-activations").append(l("<option>",{value:o,text:r.activationDisplayName[o]}))}))):l(".tabLinkNN").hide(),r.clearTabAlert("tabConfiguration"),k.setCodeLanguage(z())},o.resetRobot=function(){n.gui.robot=void 0},o.setKioskMode=function(e){n.kiosk=e},o.findGroup=M,o.findRobot=function(e){var o,r=re();for(o in r)if(r[o].group===e)return r[o].name;return null},o.setConnectionState=function e(o){switch(o){case"busy":l("#head-navi-icon-robot").removeClass("error"),l("#head-navi-icon-robot").removeClass("wait"),l("#head-navi-icon-robot").addClass("busy"),U(!1);break;case"error":l("#head-navi-icon-robot").removeClass("busy"),l("#head-navi-icon-robot").removeClass("wait"),l("#head-navi-icon-robot").addClass("error"),U(!1);break;case"wait":G()?(l("#head-navi-icon-robot").removeClass("busy"),l("#head-navi-icon-robot").removeClass("error"),l("#head-navi-icon-robot").addClass("wait"),U(!0)):e("error")}},o.isRunEnabled=function(){return n.gui.runEnabled},o.setRunEnabled=U,o.getRobot=A,o.getRobotGroup=O,o.setRobotPort=function(e){n.robot.robotPort=e},o.getRobotPort=function(){return n.robot.robotPort},o.getRobotRealName=V,o.getMenuRobotRealName=function(e){for(var o in re())if(re().hasOwnProperty(o)&&re()[o].name==e)return re()[o].realName;return"Robot not found"},o.isRobotBeta=function(e){return"beta"==te()[e].announcement},o.isRobotDeprecated=B,o.getRobotDeprecatedData=function(e){if(B(e))return d.getDeprecatedNotifications(e,H())},o.getRobotInfoDE=function(e){for(var o in re())if(re().hasOwnProperty(o)&&re()[o].name==e)return re()[o].infoDE;return"#"},o.getRobotInfoEN=function(e){for(var o in re())if(re().hasOwnProperty(o)&&re()[o].name==e)return re()[o].infoEN;return"#"},o.isRobotConnected=G,o.isConfigurationUsed=I,o.isRobotDisconnected=function(){return n.robot.time=-1},o.getRobotTime=function(){return n.robot.time},o.getRobotName=function(){return n.robot.name},o.getRobotBattery=function(){return n.robot.battery},o.getRobotState=function(){return n.robot.state},o.getRobotVersion=function(){return n.robot.version},o.hasRobotDefaultFirmware=function(){return n.gui.firmwareDefault},o.setView=function(e){n.gui.view!==e&&(l("#head-navi-tooltip-program").attr("data-bs-toggle","dropdown"),l("#head-navi-tooltip-configuration").attr("data-bs-toggle","dropdown"),l("#head-navi-tooltip-robot").attr("data-bs-toggle","dropdown"),l("#head-navigation-program-edit").removeClass("disabled"),l(".robotType").removeClass("disabled"),l("#head-navigation-configuration-edit").removeClass("disabled"),n.gui.prevView=n.gui.view,n.gui.view=e,G()||(U(!1),l("#runSourceCodeEditor").addClass("disabled")),l(".rightMenuButton.rightActive").length>0&&l(".rightMenuButton.rightActive").clickWrap(),"tabConfiguration"===e?(l("#head-navigation-program-edit").css("display","none"),l("#head-navigation-configuration-edit").css("display","inline"),l("#menuTabProgram").parent().removeClass("disabled"),l("#menuTabNN").parent().removeClass("disabled"),l("#menuTabNNLearn").parent().removeClass("disabled"),l("#menuTabConfiguration").parent().addClass("disabled"),r.clearTabAlert(e)):"tabProgram"===e?(l("#head-navigation-configuration-edit").css("display","none"),l("#head-navigation-program-edit").css("display","inline"),l("#menuTabConfiguration").parent().removeClass("disabled"),l("#menuTabNN").parent().removeClass("disabled"),l("#menuTabNNLearn").parent().removeClass("disabled"),l("#menuTabProgram").parent().addClass("disabled")):"tabNN"===e?(l("#head-navigation-configuration-edit").css("display","none"),l("#head-navigation-program-edit").css("display","inline"),l("#menuTabConfiguration").parent().removeClass("disabled"),l("#menuTabProgram").parent().removeClass("disabled"),l("#menuTabNN").parent().addClass("disabled"),l("#menuTabNNLearn").parent().removeClass("disabled")):"tabNNlearn"===e?(l("#head-navigation-configuration-edit").css("display","none"),l("#head-navigation-program-edit").css("display","inline"),l("#menuTabConfiguration").parent().removeClass("disabled"),l("#menuTabProgram").parent().removeClass("disabled"),l("#menuTabNN").parent().removeClass("disabled"),l("#menuTabNNLearn").parent().addClass("disabled")):"tabSourceCodeEditor"===e?(l("#head-navigation-configuration-edit").css("display","none"),l("#head-navigation-program-edit").css("display","inline"),l("#menuTabProgram").parent().removeClass("disabled"),l("#menuTabConfiguration").parent().removeClass("disabled"),l("#menuTabNN").parent().removeClass("disabled"),l("#menuTabNNLearn").parent().removeClass("disabled"),l("#head-navigation-program-edit").addClass("disabled"),l(".robotType").addClass("disabled"),l("#head-navi-tooltip-program").attr("data-bs-toggle",""),l("#head-navi-tooltip-configuration").attr("data-bs-toggle","")):(l("#head-navi-tooltip-program").attr("data-bs-toggle",""),l("#head-navi-tooltip-configuration").attr("data-bs-toggle",""),l("#head-navigation-program-edit").addClass("disabled"),l("#head-navigation-configuration-edit").addClass("disabled")))},o.getView=F,o.getPrevView=_,o.setLanguage=function(e){if(l("#language li a[lang="+e+"]").parent().addClass("disabled"),l("#language li a[lang="+n.gui.language+"]").parent().removeClass("disabled"),"de"===e?(l(".EN").css("display","none"),l(".DE").css("display","inline"),l("li>a.DE").css("display","block")):(l(".DE").css("display","none"),l(".EN").css("display","inline"),l("li>a.EN").css("display","block")),n.gui.language=e,a.initView(),i.loadLegalTexts(),p.initValidationMessages(),d.reloadNotifications(),"tabStart"!==F()){m.reloadView(),b.reloadView(),(0,v.switchLanguage)(),(0,C.switchLanguage)(),(0,h.switchLanguage)(),(0,P.switchLanguage)(),(0,N.switchLanguage)(),(0,y.switchLanguage)(),f.reloadViews();var o=g.Msg.MENU_START_BRICK;o.indexOf("$")>=0&&(o=o.replace("$",V())),l("#menuRunProg").text(o),W()&&W().robControls.refreshTooltips(V()),l("#infoContent").attr("data-placeholder",g.Msg.INFO_DOCUMENTATION_HINT||"Document your program here ..."),l(".bootstrap-tagsinput input").attr("placeholder",g.Msg.INFO_TAGS||"Tags"),me()}},o.getLanguage=H,o.isProgramSaved=function(){return n.program.saved},o.setProgramSaved=X,o.isConfigurationSaved=function(){return n.configuration.saved},o.setConfigurationSaved=j,o.getProgramShared=function(){return n.program.shared},o.setProgramSource=function(e){n.program.source=e},o.getProgramSource=function(){return n.program.source},o.getSourceCodeFileExtension=z,o.getBinaryFileExtension=function(){return n.gui.binaryFileExtension},o.isUserLoggedIn=K,o.getProgramTimestamp=function(){return n.program.timestamp},o.setProgramTimestamp=function(e){n.program.timestamp=e},o.getProgramName=function(){return n.program.name},o.setProgramName=$,o.getProgramOwnerName=q,o.setProgramOwnerName=J,o.getProgramAuthorName=Q,o.setProgramAuthorName=Y,o.getProgramShareRelation=Z,o.setProgramShareRelation=ee,o.getConfigurationName=function(){return n.configuration.name},o.setConfigurationName=oe,o.setConfigurationNameDefault=function(){oe(x())},o.setProgramToolboxLevel=function(e){l(".level").removeClass("disabled"),l(".level."+e).addClass("disabled"),n.program.toolbox.level=e},o.getProgramToolboxLevel=function(){return n.program.toolbox.level},o.getToolbox=function(e){return n.gui.program.toolbox[e]},o.getConfToolbox=function(){return n.conf.toolbox},o.getRobotFWName=function(){return n.robot.fWName},o.setRobotToken=function(e){n.robot.token=e},o.setRobotUrl=function(e){n.robot.url=e},o.setConfigurationXML=function(e){n.configuration.xml=e},o.getConfigurationXML=function(){return n.configuration.xml},o.setProgramXML=function(e){n.program.xml=e},o.getProgramXML=function(){return n.program.xml},o.getRobots=re,o.getProgramToolbox=function(){return n.gui.program.dynamicToolbox?n.gui.program.dynamicToolbox:n.gui.program.toolbox[n.program.toolbox.level]},o.setDynamicProgramToolbox=function(e){n.gui.program.dynamicToolbox=e},o.resetDynamicProgramToolbox=function(){delete n.gui.program.dynamicToolbox},o.getConfigurationToolbox=function(){return n.gui.configuration.toolbox},o.getProgramProg=function(){return n.gui.program.prog},o.getConfigurationConf=function(){return n.gui.configuration.conf},o.getStartWithoutPopup=function(){return n.gui.startWithoutPopup},o.setStartWithoutPopup=function(){return n.gui.startWithoutPopup=!0},o.getServerVersion=function(){return n.server.version},o.isPublicServerVersion=function(){return n.server.isPublic},o.getUserName=function(){return n.user.name},o.getUserAccountName=ne,o.isUserAccountActivated=function(){return n.user.isAccountActivated},o.isUserMemberOfUserGroup=ae,o.getUserUserGroup=function(){return n.user.userGroup},o.getUserUserGroupOwner=function(){return n.user.userGroupOwner},o.setLogin=function(e){L(e),n.user.accountName=e.userAccountName,void 0===e.userName||""===e.userName?n.user.name=e.userAccountName:n.user.name=e.userName,n.user.id=e.userId,n.user.isAccountActivated=e.isAccountActivated,n.user.userGroup=e.userGroupName,n.user.userGroupOwner=e.userGroupOwner,l(".navbar-nav > li > ul > .login, .logout").removeClass("disabled"),l(".navbar-nav > li > ul > .login.unavailable").addClass("disabled"),l(".navbar-nav > li > ul > .logout").addClass("disabled"),l("#head-navi-icon-user").removeClass("error"),l("#head-navi-icon-user").addClass("ok"),l(".menuLogin").addClass("pe-none"),l("#menuSaveProg").parent().addClass("disabled"),l("#menuSaveConfig").parent().addClass("disabled"),A()&&(X(!0),j(!0),"tabGalleryList"==n.gui.view&&l("#galleryList").find('button[name="refresh"]').clickWrap()),ae()&&(l("#registerUserName, #registerUserEmail").prop("disabled",!0),l("#userGroupMemberDefaultPasswordHint").removeClass("hidden"))},o.setLogout=function(){ae()&&(l("#registerUserName, #registerUserEmail").prop("disabled",!1),l("#userGroupMemberDefaultPasswordHint").addClass("hidden")),n.user.id=-1,n.user.accountName="",n.user.name="",n.user.userGroup="",n.user.userGroupOwner="","tabUserGroupList"===F()&&l("#"+_()).tabWrapShow(),$("NEPOprog"),J(null),Y(null),ee(null),n.program.shared=!1,l(".navbar-nav > li > ul > .logout, .login").removeClass("disabled"),l(".navbar-nav > li > ul > .login").addClass("disabled"),l("#head-navi-icon-user").removeClass("ok"),l("#head-navi-icon-user").addClass("error"),"tabProgList"==n.gui.view?l("#tabProgram").tabWrapShow():"tabConfList"==n.gui.view?l("#tabConfiguration").clickWrap():"tabGalleryList"==n.gui.view&&l("#galleryList").find('button[name="refresh"]').clickWrap(),l(".menuLogin").removeClass("pe-none")},o.setProgram=function(e,o,r){if(e){n.program.shared=e.programShared,n.program.timestamp=e.lastChanged,X(!0),j(!0);e.name;ee(e.programShared),o?J(o):e.parameters&&e.parameters.OWNER_NAME?J(e.parameters.OWNER_NAME):J(null),r?Y(r):e.parameters&&e.parameters.AUTHOR_NAME?Y(e.parameters.AUTHOR_NAME):J(null),$(e.name)}},o.setConfiguration=function(e){e&&(oe(e.name),n.configuration.timestamp=e.lastChanged,j(!0),X(!1),l("#tabConfigurationName").html(e.name))},o.checkSim=ie,o.hasSim=se,o.hasMultiSim=ue,o.hasMarkerSim=le,o.getPluginSim=function(){return n.gui.pluginSim||null},o.hasWebotsSim=ge,o.getWebotsUrl=function(){return n.gui.webotsUrl},o.getListOfTutorials=de,o.getVendor=function(){return n.gui.vendor},o.getSignature=function(){return n.gui.signature},o.getCommandLine=function(){return n.gui.commandLine},o.setPing=function(e){n.server.ping=e},o.doPing=function(){return n.server.ping},o.setPingTime=function(e){n.server.pingTime=e},o.getPingTime=function(){return n.server.pingTime},o.getAvailableHelp=function(){return n.server.help},o.getTheme=function(){return n.server.theme},o.inWebview=ce,o.setWebview=function(e){n.gui.webview=e},o.updateMenuStatus=function(e){c.getConnectionInstance().updateMenuStatus(e)},o.updateTutorialMenu=me,o.getLegalTextsMap=function(){return n.server.legalTexts}}));
//# sourceMappingURL=guiState.controller.js.map
//# sourceMappingURL=guiState.controller.js.map
