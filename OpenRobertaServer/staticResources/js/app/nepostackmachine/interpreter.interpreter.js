define(["require","exports","./interpreter.state","./neuralnetwork.ui","./interpreter.constants","./interpreter.util","simulation.roberta","util.roberta"],(function(t,e,s,a,i,r,o,h){Object.defineProperty(e,"__esModule",{value:!0}),e.Interpreter=void 0;var n=function(){function t(t,e,a,r,o,h){this.terminated=!1,this.callbackOnTermination=void 0,this.debugDelay=2,this.terminated=!1,this.callbackOnTermination=a;var n=t[i.OPS];this.robotBehaviour=e,this.name=o,this.updateNNView=h,this.breakpoints=r,this.events={},this.events[i.DEBUG_STEP_INTO]=!1,this.events[i.DEBUG_BREAKPOINT]=!1,this.events[i.DEBUG_STEP_OVER]=!1,this.lastBlock=null,this.lastStoppedBlock=null,this.stepOverBlock=null,this.state=new s.State(n)}return Object.defineProperty(t.prototype,"name",{get:function(){return this._name},set:function(t){this._name=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"neuralNetwork",{get:function(){return this._neuralNetwork},set:function(t){this._neuralNetwork=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateNNView",{get:function(){return this._updateNNView},set:function(t){this._updateNNView=t},enumerable:!1,configurable:!0}),t.prototype.run=function(t){return this.evalOperation(t)},t.prototype.isTerminated=function(){return this.terminated},t.prototype.terminate=function(){this.terminated=!0,this.callbackOnTermination(),this.robotBehaviour.close(),this.state.removeHighlights([])},t.prototype.getRobotBehaviour=function(){return this.robotBehaviour},t.prototype.getVariables=function(){return this.state.getVariables()},t.prototype.removeHighlights=function(){this.state.removeHighlights([])},t.prototype.setDebugMode=function(t){this.state.setDebugMode(t),t?($("#blocklyDiv").addClass("debug"),this.state.addHighlights(this.breakpoints)):(this.state.removeHighlights(this.breakpoints),$("#blocklyDiv").removeClass("debug"))},t.prototype.addEvent=function(t){this.events[t]=!0},t.prototype.removeEvent=function(t){this.events[t]=!1},t.prototype.evalOperation=function(t){for(;t>=(new Date).getTime()&&!this.robotBehaviour.getBlocking();){var e=this.state.getOp();if(this.state.evalHighlightings(e,this.lastBlock),this.state.getDebugMode())if(!this.calculateDebugBehaviour(e))return 0;var s=this.evalSingleOperation(e),a=s[0],i=s[1];if(this.lastStoppedBlock=null,this.lastBlock=e,a>0||i)return a;if(this.terminated)return this.robotBehaviour.close(),this.callbackOnTermination(),0;if(this.state.getDebugMode())return this.debugDelay}return 0},t.prototype.calculateDebugBehaviour=function(e){if(this.events[i.DEBUG_BREAKPOINT]&&t.isBreakPoint(e,this.breakpoints)&&e!==this.lastStoppedBlock)return this.breakPoint(e),!1;if(this.events[i.DEBUG_STEP_INTO]&&t.isPossibleStepInto(e)&&e!==this.lastStoppedBlock)return this.stepInto(e),!1;if(this.events[i.DEBUG_STEP_OVER]){if(null!==this.stepOverBlock&&!this.state.beingExecuted(this.stepOverBlock)&&t.isPossibleStepInto(e))return this.stepOver(e),!1;if(null===this.stepOverBlock&&t.isPossibleStepOver(e))this.stepOverBlock=e;else if(null===this.stepOverBlock&&this.lastStoppedBlock!==e&&t.isPossibleStepInto(e))return this.stepOver(e),!1}return!0},t.prototype.stepOver=function(t){o.SimulationRoberta.Instance.setPause(!0),this.events[i.DEBUG_STEP_OVER]=!1,this.stepOverBlock=null,this.lastStoppedBlock=t},t.prototype.stepInto=function(t){o.SimulationRoberta.Instance.setPause(!0),this.events[i.DEBUG_STEP_INTO]=!1,this.lastStoppedBlock=t},t.prototype.breakPoint=function(t){o.SimulationRoberta.Instance.setPause(!0),this.events[i.DEBUG_BREAKPOINT]=!1,this.lastStoppedBlock=t},t.prototype.evalSingleOperation=function(t){if(this.state.opLog("actual ops: "),this.state.incrementProgramCounter(),void 0===t)r.debug("PROGRAM TERMINATED. No ops remaining"),this.terminated=!0;else{var e=t[i.OPCODE];switch(e){case i.JUMP:var s=t[i.CONDITIONAL];s!==i.ALWAYS&&this.state.pop()!==s||(this.state.pc=t[i.TARGET]);break;case i.CALL:this.state.pc=t[i.TARGET];break;case i.RETURN_ADDRESS:this.state.push(+t[i.TARGET]);break;case i.ASSIGN_STMT:var o=t[i.NAME];this.state.setVar(o,this.state.pop());break;case i.POP:this.state.pop();break;case i.CLEAR_DISPLAY_ACTION:return this.robotBehaviour.clearDisplay(),[0,!0];case i.CREATE_DEBUG_ACTION:r.debug("NYI");break;case i.EXPR:this.evalExpr(t);break;case i.GET_SAMPLE:this.robotBehaviour.getSample(this.state,t[i.NAME],t[i.GET_SAMPLE],t[i.PORT],t[i.MODE],t[i.SLOT]);break;case i.COLOUR_COMPARE:var h=this.state.pop(),n=this.state.pop(),p=this.state.pop();this.state.push(this.robotBehaviour.colourCompare(p,n,h));break;case i.MARKER:var u=this.state.pop();this.robotBehaviour.getSample(this.state,t[i.NAME],t[i.GET_SAMPLE],t[i.PORT],t[i.MODE],u);break;case i.NEURAL_NETWORK:(0,a.setupNN)(t),this.neuralNetwork=(0,a.getNetwork)();break;case i.NN_STEP_STMT:this.neuralNetwork.forwardProp();break;case i.NN_SETINPUTNEURON_STMT:this.neuralNetwork.setInputNeuronVal(t[i.NAME],this.state.pop());break;case i.NN_SETWEIGHT_STMT:this.neuralNetwork.changeWeight(t[i.FROM],t[i.TO],this.state.pop());break;case i.NN_SETBIAS_STMT:this.neuralNetwork.changeBias(t[i.NAME],this.state.pop());break;case i.RGBLED_ON_ACTION:var c=this.state.pop();this.robotBehaviour.ledOnAction(t[i.NAME],t[i.PORT],c);break;case i.LED_ACTION:return"ON"===t[i.MODE]?this.robotBehaviour.ledOnAction(t[i.NAME],t[i.PORT],null):this.robotBehaviour.ledOffAction(t[i.NAME],t[i.PORT]),[0,!0];case i.REMEMBER:var E=this.state.pop();this.robotBehaviour.remember(E);break;case i.RECALL:this.robotBehaviour.recall(this.state);break;case i.RETURN:var T=void 0;t[i.VALUES]&&(T=this.state.pop());var O=this.state.pop();this.state.pc=O,t[i.VALUES]&&this.state.push(T);break;case i.MOTOR_ON_ACTION:var v=t[i.SPEED_ONLY],N=void 0,b=void 0;(S=t[i.SET_TIME])?(b=void 0,N=S?this.state.pop():void 0):(N=void 0,b=v?void 0:this.state.pop());var l=this.state.pop(),A=t[i.NAME],I=t[i.PORT],_=t[i.MOTOR_DURATION];return[this.robotBehaviour.motorOnAction(A,I,_,b,l,N),!0];case i.DRIVE_ACTION:v=t[i.SPEED_ONLY];var S=t[i.SET_TIME],R=t[i.NAME],f=(N=void 0,void 0);S?(f=void 0,N=S?this.state.pop():void 0):(N=void 0,f=v?void 0:this.state.pop());l=this.state.pop();var M=t[i.DRIVE_DIRECTION];return[b=this.robotBehaviour.driveAction(R,M,l,f,N),!0];case i.TURN_ACTION:v=t[i.SPEED_ONLY],N=void 0;var d=void 0;(S=t[i.SET_TIME])?(d=void 0,N=S?this.state.pop():void 0):(N=void 0,d=v?void 0:this.state.pop());l=this.state.pop();var k=t[i.NAME];M=t[i.TURN_DIRECTION];return[b=this.robotBehaviour.turnAction(k,M,l,d,N),!0];case i.CURVE_ACTION:v=t[i.SPEED_ONLY],N=void 0,f=void 0;(S=t[i.SET_TIME])?(f=void 0,N=S?this.state.pop():void 0):(N=void 0,f=v?void 0:this.state.pop());var B=this.state.pop(),P=this.state.pop(),g=t[i.NAME];M=t[i.DRIVE_DIRECTION];return[b=this.robotBehaviour.curveAction(g,M,P,B,f,N),!0];case i.STOP_DRIVE:var D=t[i.NAME];return this.robotBehaviour.driveStop(D),[0,!0];case i.BOTH_MOTORS_ON_ACTION:var L=this.state.pop(),m=this.state.pop(),C=t[i.PORT_A],y=t[i.PORT_B];return this.robotBehaviour.motorOnAction(C,C,"",0,m,0),this.robotBehaviour.motorOnAction(y,y,"",0,L,0),[0,!0];case i.MOTOR_STOP:return this.robotBehaviour.motorStopAction(t[i.NAME],t[i.PORT]),[0,!0];case i.MOTOR_SET_POWER:l=this.state.pop();var G=t[i.NAME];I=t[i.PORT];return this.robotBehaviour.setMotorSpeed(G,I,l),[0,!0];case i.MOTOR_GET_POWER:I=t[i.PORT];this.robotBehaviour.getMotorSpeed(this.state,D,I);break;case i.OMNI_DRIVE:var U=this.state.pop(),w=this.state.pop(),V=this.state.pop();return this.robotBehaviour.omniDriveAction(V,w,U),[0,!0];case i.OMNI_DRIVE_DIST:f=this.state.pop(),w=this.state.pop(),V=this.state.pop();return[this.robotBehaviour.omniDriveDistAction(V,w,f),!0];case i.OMNI_DRIVE_STOP:return this.robotBehaviour.omniStopDriveAction(),[0,!0];case i.OMNI_DRIVE_TURN:d=this.state.pop(),U=this.state.pop(),M=t[i.TURN_DIRECTION];return[this.robotBehaviour.omniDriveTurnAction(M,U,d),!0];case i.OMNI_DRIVE_POSITION:var x=this.state.pop(),H=this.state.pop(),F=this.state.pop();return[this.robotBehaviour.omniDrivePositionAction(x,F,H),!0];case i.SHOW_TEXT_ACTION:var W=this.state.pop(),Y=t[i.NAME];if("ev3"===Y||"txt4"===Y){F=0;"ev3"===Y&&(F=this.state.pop());H=this.state.pop();return this.robotBehaviour.showTextActionPosition(W,F,H),[0,!0]}return[this.robotBehaviour.showTextAction(W,t[i.MODE]),!0];case i.SHOW_IMAGE_ACTION:var X=void 0;return X="ev3"==t[i.NAME]?t[i.IMAGE]:this.state.pop(),[this.robotBehaviour.showImageAction(X,t[i.MODE]),!0];case i.DISPLAY_SET_BRIGHTNESS_ACTION:var Q=this.state.pop();return[this.robotBehaviour.displaySetBrightnessAction(Q),!0];case i.IMAGE_SHIFT_ACTION:var j=this.state.pop();X=this.state.pop();"mbot"===t[i.NAME]?this.state.push(this.shiftImageActionMbot(X,t[i.DIRECTION],j)):this.state.push(this.shiftImageAction(X,t[i.DIRECTION],j));break;case i.DISPLAY_SET_PIXEL_BRIGHTNESS_ACTION:Q=this.state.pop(),H=this.state.pop(),F=this.state.pop();return[this.robotBehaviour.displaySetPixelBrightnessAction(F,H,Q),!0];case i.DISPLAY_GET_PIXEL_BRIGHTNESS_ACTION:H=this.state.pop(),F=this.state.pop();this.robotBehaviour.displayGetPixelBrightnessAction(this.state,F,H);break;case i.LIGHT_ACTION:var q=void 0;if("mbot"===t[i.NAME]||"txt4"===t[i.NAME]){var K=this.state.pop();q="rgb("+K[0]+","+K[1]+","+K[2]+")"}else q=t[i.COLOR];return this.robotBehaviour.lightAction(t[i.MODE],q,t[i.PORT]),[0,!0];case i.RGBLED_OFF_ACTION:return this.robotBehaviour.ledOffAction(t[i.NAME],t[i.PORT]),[0,!0];case i.CIRCLE_LED_ACTION:case i.PROXH_LED_ACTION:for(var J=new Array(8),$=0;$<8;$++){var z=this.state.pop();J[7-$]=z}return e===i.CIRCLE_LED_ACTION?this.robotBehaviour.circleLedAction(J):this.robotBehaviour.proxHLedAction(J),[0,!0];case i.BUTTON_LED_ACTION:for(J=new Array(4),$=0;$<4;$++){var Z=this.state.pop();J[3-$]=Z}return this.robotBehaviour.buttonLedAction(J),[0,!0];case i.SOUND_LED_ACTION:var tt=this.state.pop();return this.robotBehaviour.soundLedAction(tt),[0,!0];case i.TEMPERATURE_LED_ACTION:var et=this.state.pop(),st=this.state.pop();return this.robotBehaviour.temperatureLedAction(st,et),[0,!0];case i.STOP:r.debug("PROGRAM TERMINATED. stop op"),this.terminated=!0;break;case i.TEXT_JOIN:var at=t[i.NUMBER],it=new Array(at);for($=0;$<at;$++){var rt=this.state.pop();it[at-$-1]=rt}this.state.push(it.join(""));break;case i.TIMER_SENSOR_RESET:return this.robotBehaviour.timerReset(t[i.PORT]),[0,!0];case i.ENCODER_SENSOR_RESET:return this.robotBehaviour.encoderReset(t[i.PORT]),[0,!0];case i.GYRO_SENSOR_RESET:return this.robotBehaviour.gyroReset(t[i.PORT]),[0,!0];case i.ODOMETRY_SENSOR_RESET:return this.robotBehaviour.odometryReset(t[i.SLOT]),[0,!0];case i.TONE_ACTION:b=this.state.pop();var ot=this.state.pop();return[this.robotBehaviour.toneAction(t[i.NAME],ot,b),!0];case i.PLAY_FILE_ACTION:return[this.robotBehaviour.playFileAction(t[i.FILE]),!0];case i.SET_VOLUME_ACTION:return this.robotBehaviour.setVolumeAction(this.state.pop()),[0,!0];case i.GET_VOLUME:this.robotBehaviour.getVolumeAction(this.state);break;case i.SET_LANGUAGE_ACTION:this.robotBehaviour.setLanguage(t[i.LANGUAGE]);break;case i.SAY_TEXT_ACTION:var ht=this.state.pop();l=this.state.pop(),W=this.state.pop();return[this.robotBehaviour.sayTextAction(W,l,ht),!0];case i.UNBIND_VAR:var nt=t[i.NAME];this.state.unbindVar(nt);break;case i.VAR_DECLARATION:var pt=t[i.NAME];this.state.bindVar(pt,this.state.pop());break;case i.WAIT_TIME_STMT:return[N=this.state.pop(),!0];case i.WRITE_PIN_ACTION:var ut=this.state.pop(),ct=t[i.MODE],Et=t[i.PIN];return this.robotBehaviour.writePinAction(Et,ct,ut),[0,!0];case i.LIST_OPERATION:var Tt=t[i.OP],Ot=t[i.POSITION],vt=0;Ot!=i.LAST&&Ot!=i.FIRST&&(vt=this.state.pop());ut=this.state.pop();var Nt=this.state.pop();vt=this.getIndex(Nt,Ot,vt),Tt==i.SET?Nt[vt]=ut:Tt==i.INSERT&&(Ot===i.LAST?Nt.splice(vt+1,0,ut):Nt.splice(vt,0,ut));break;case i.TEXT_APPEND:case i.MATH_CHANGE:ut=this.state.pop();var bt=t[i.NAME];this.state.bindVar(bt,this.state.pop()+ut);break;case i.SERIAL_WRITE_ACTION:ut=this.state.pop();this.robotBehaviour.debugAction(ut);break;case i.DEBUG_ACTION:ut=this.state.pop();this.robotBehaviour.debugAction(ut);break;case i.ASSERT_ACTION:var lt=this.state.pop(),At=this.state.pop();ut=this.state.pop();this.robotBehaviour.assertAction(t[i.MSG],At,t[i.OP],lt,ut);break;case i.COMMENT:break;default:r.dbcException("invalid stmt op: "+e)}}return[0,!1]},t.prototype.evalExpr=function(t){var e,s=t[i.EXPR];switch(s){case i.VAR:this.state.push(this.state.getVar(t[i.NAME]));break;case i.NUM_CONST:this.state.push(+t[i.VALUE]);break;case i.CREATE_LIST:for(var a=t[i.NUMBER],o=new Array(a),h=0;h<a;h++){var n=this.state.pop();o[a-h-1]=n}this.state.push(o);break;case i.CREATE_LIST_REPEAT:var p=this.state.pop(),u=this.state.pop();for(o=new Array,h=0;h<p;h++)o[h]=u;this.state.push(o);break;case i.BOOL_CONST:case i.STRING_CONST:case i.COLOR_CONST:case i.IMAGE:this.state.push(t[i.VALUE]);break;case i.RGB_COLOR_CONST:var c=this.state.pop(),E=this.state.pop(),T=this.state.pop();this.state.push([T,E,c]);break;case i.UNARY:switch(b=t[i.OP]){case i.NOT:var O,v=this.state.pop();O="true"===v||"false"!==v&&"0"!==v&&""!==v&&!!v,this.state.push(!O);break;case i.NEG:var N=this.state.pop();this.state.push(-N);break;default:r.dbcException("invalid unary expr subOp: "+b)}break;case i.MATH_CONST:switch(t[i.VALUE]){case"PI":this.state.push(Math.PI);break;case"E":this.state.push(Math.E);break;case"GOLDEN_RATIO":this.state.push((1+Math.sqrt(5))/2);break;case"SQRT2":this.state.push(Math.SQRT2);break;case"SQRT1_2":this.state.push(Math.SQRT1_2);break;case"INFINITY":this.state.push(1/0);break;default:throw"Invalid Math Constant Name"}break;case i.NN_GETWEIGHT:this.state.push(this.neuralNetwork.getWeight(t[i.FROM],t[i.TO]));break;case i.NN_GETBIAS:this.state.push(this.neuralNetwork.getBias(t[i.NAME]));break;case i.NN_GETOUTPUTNEURON_VAL:this.state.push(this.neuralNetwork.getOutputNeuronVal(t[i.NAME]));break;case i.SINGLE_FUNCTION:var b=t[i.OP],l=this.state.pop();switch(r.debug("---------- "+b+" with "+l),b){case"SQUARE":this.state.push(Math.pow(l,2));break;case"ROOT":this.state.push(Math.sqrt(l));break;case"ABS":this.state.push(Math.abs(l));break;case"LN":this.state.push(Math.log(l));break;case"LOG10":this.state.push(Math.log(l)/Math.LN10);break;case"EXP":this.state.push(Math.exp(l));break;case"POW10":this.state.push(Math.pow(10,l));break;case"SIN":this.state.push(Math.sin(l));break;case"COS":this.state.push(Math.cos(l));break;case"TAN":this.state.push(Math.tan(l));break;case"ASIN":this.state.push(Math.asin(l));break;case"ATAN":this.state.push(Math.atan(l));break;case"ACOS":this.state.push(Math.acos(l));break;case"ROUND":this.state.push(Math.round(l));break;case"ROUNDUP":this.state.push(Math.ceil(l));break;case"ROUNDDOWN":this.state.push(Math.floor(l));break;case i.IMAGE_INVERT_ACTION:this.state.push(this.invertImage(l));break;default:throw"Invalid Function Name"}break;case i.MATH_CONSTRAIN_FUNCTION:var A=this.state.pop(),I=this.state.pop(),_=this.state.pop();this.state.push(Math.min(Math.max(_,I),A));break;case i.RANDOM_INT:var S=this.state.pop(),R=this.state.pop();R>S&&(R=(e=[S,R])[0],S=e[1]),this.state.push(Math.floor(Math.random()*(S-R+1)+R));break;case i.RANDOM_DOUBLE:this.state.push(Math.random());break;case i.MATH_PROP_FUNCT:b=t[i.OP];var f=this.state.pop();switch(b){case"EVEN":this.state.push(this.isWhole(f)&&f%2==0);break;case"ODD":this.state.push(this.isWhole(f)&&f%2!=0);break;case"PRIME":this.state.push(this.isPrime(f));break;case"WHOLE":this.state.push(this.isWhole(f));break;case"POSITIVE":this.state.push(f>=0);break;case"NEGATIVE":this.state.push(f<0);break;case"DIVISIBLE_BY":var M=this.state.pop();this.state.push(M%f==0);break;default:throw"Invalid Math Property Function Name"}break;case i.MATH_ON_LIST:b=t[i.OP];var d=this.state.pop();switch(b){case i.SUM:this.state.push(this.sum(d));break;case i.MIN:this.state.push(this.min(d));break;case i.MAX:this.state.push(this.max(d));break;case i.AVERAGE:this.state.push(this.mean(d));break;case i.MEDIAN:this.state.push(this.median(d));break;case i.STD_DEV:this.state.push(this.std(d));break;case i.RANDOM:this.state.push(d[this.getRandomInt(d.length)]);break;default:throw"Invalid Math on List Function Name"}break;case i.CAST_STRING:var k=this.state.pop();this.state.push(k.toString());break;case i.CAST_CHAR:k=this.state.pop();this.state.push(String.fromCharCode(k));break;case i.CAST_STRING_NUMBER:var B=this.state.pop();this.state.push(parseFloat(B));break;case i.CAST_CHAR_NUMBER:var P=this.state.pop();B=this.state.pop();this.state.push(B.charCodeAt(P));break;case i.LIST_OPERATION:switch(b=t[i.OP]){case i.LIST_IS_EMPTY:this.state.push(0==this.state.pop().length);break;case i.LIST_LENGTH:this.state.push(this.state.pop().length);break;case i.LIST_FIND_ITEM:var g=this.state.pop(),D=this.state.pop(),L=-1;if(t[i.POSITION]==i.FIRST){for(h=0;h<D.length;h++)if(Array.isArray(D[h])){L=h;for(var m=0;m<D[h].length;m++)if(D[h][m]!=g[m]){L=-1;break}if(-1!=L)break}else if(D[h]==g){L=h;break}}else for(h=D.length-1;h>=0;h--)if(Array.isArray(D[h])){L=h;for(m=0;m<D[h].length;m++)if(D[h][m]!=g[m]){L=-1;break}if(-1!=L)break}else if(D[h]==g){L=h;break}this.state.push(L);break;case i.GET:case i.REMOVE:case i.GET_REMOVE:var C=t[i.POSITION],y=0;C!=i.LAST&&C!=i.FIRST&&(y=this.state.pop());var G=(D=this.state.pop())[y=this.getIndex(D,C,y)];b!=i.GET_REMOVE&&b!=i.GET||this.state.push(G),b!=i.GET_REMOVE&&b!=i.REMOVE||D.splice(y,1);break;case i.LIST_GET_SUBLIST:var U=t[i.POSITION],w=void 0,V=void 0;U[1]!=i.LAST&&(V=this.state.pop()),U[0]!=i.FIRST&&(w=this.state.pop());D=this.state.pop();w=this.getIndex(D,U[0],w),V=this.getIndex(D,U[1],V)+1,this.state.push(D.slice(w,V));break;default:throw"Invalid Op on List Function Name"}break;case i.BINARY:b=t[i.OP];var x=this.state.pop(),H=this.state.pop();this.state.push(this.evalBinary(b,H,x));break;case i.NULL_CONST:this.state.push(null);break;default:r.dbcException("invalid expr op: "+s)}},t.prototype.evalBinary=function(t,e,s){var a=Array.isArray(e),o=Array.isArray(s);if(a&&o){var h=e.length,n=s.length;switch(t){case i.EQ:if(h===n){for(var p=0;p<h;p++)if(!this.evalBinary(t,e[p],s[p]))return!1;return!0}return!1;case i.NEQ:if(h===n){for(p=0;p<h;p++)if(this.evalBinary(t,e[p],s[p]))return!0;return!1}return!0;default:r.dbcException("invalid binary expr supOp for array-like structures: "+t)}}else{if(a||o)return!1;switch(t){case i.EQ:return e==s;case i.NEQ:return e!==s;case i.LT:return e<s;case i.LTE:return e<=s;case i.GT:return e>s;case i.GTE:return e>=s;case i.AND:return e&&s;case i.OR:return e||s;case i.ADD:return 0+e+s;case i.MINUS:return 0+e-s;case i.MULTIPLY:return 0+e*s;case i.DIVIDE:return 0+e/s;case i.POWER:return Math.pow(e,s);case i.MOD:return e%s;default:r.dbcException("invalid binary expr supOp: "+t)}}},t.prototype.isPrime=function(t){if(t<2)return!1;if(2===t)return!0;if(t%2==0)return!1;for(var e=3,s=Math.sqrt(t);e<=s;e+=2)if(t%e==0)return!1;return!0},t.prototype.isWhole=function(t){return Number(t)===t&&t%1==0},t.prototype.min=function(t){return Math.min.apply(null,t)},t.prototype.max=function(t){return Math.max.apply(null,t)},t.prototype.sum=function(t){return t.reduce((function(t,e){return t+e}),0)},t.prototype.mean=function(t){var e=this.sum(t)/t.length;return Number(e.toFixed(2))},t.prototype.median=function(t){t.sort((function(t,e){return t-e}));var e=(t[t.length-1>>1]+t[t.length>>1])/2;return Number(e.toFixed(2))},t.prototype.std=function(t){var e=this.mean(t),s=t.map((function(t){return t-e})).map((function(t){return t*t})),a=this.mean(s);return Number(Math.sqrt(a).toFixed(2))},t.prototype.getRandomInt=function(t){return Math.floor(Math.random()*Math.floor(t))},t.prototype.getIndex=function(t,e,s){if(e==i.FROM_START)return s;if(e==i.FROM_END)return t.length-1-s;if(e==i.FIRST)return 0;if(e==i.LAST)return t.length-1;throw"Unhandled option (lists_getSublist)."},t.prototype.invertImage=function(t){for(var e=h.clone(t),s=0;s<e.length;s++)for(var a=0;a<e[s].length;a++)e[s][a]=Math.abs(255-e[s][a]);return e},t.prototype.shiftImageAction=function(t,e,s){var a=h.clone(t),i={down:function(){a.pop(),a.unshift([0,0,0,0,0])},up:function(){a.shift(),a.push([0,0,0,0,0])},right:function(){a.forEach((function(t){t.pop(),t.unshift(0)}))},left:function(){a.forEach((function(t){t.shift(),t.push(0)}))}};(s=Math.round(s))<0&&(s*=-1,"up"===e?e="down":"down"===e?e="up":"left"===e?e="right":"right"===e&&(e="left"));for(var r=0;r<s;r++)i[e]();return a},t.prototype.shiftImageActionMbot=function(t,e,s){var a={left:function(){t.pop(),t.unshift([0,0,0,0,0,0,0,0])},right:function(){t.shift(),t.push([0,0,0,0,0,0,0,0])},up:function(){t.forEach((function(t){t.pop(),t.unshift(0)}))},down:function(){t.forEach((function(t){t.shift(),t.push(0)}))}};(s=Math.round(s))<0&&(s*=-1,"up"===e?e="down":"down"===e?e="up":"left"===e?e="right":"right"===e&&(e="left"));for(var i=0;i<s;i++)a[e]();return t},t.isPossibleStepInto=function(t){var e;return(null===(e=t[i.POSSIBLE_DEBUG_STOP])||void 0===e?void 0:e.length)>0},t.isPossibleStepOver=function(t){var e=t[i.OPCODE]===i.COMMENT&&t[i.TARGET]===i.METHOD_CALL;return t.hasOwnProperty(i.HIGHTLIGHT_PLUS)&&e},t.isBreakPoint=function(t,e){var s,a;return!!(null===(s=t[i.POSSIBLE_DEBUG_STOP])||void 0===s?void 0:s.some((function(t){return e.indexOf(t)>=0})))||!!(null===(a=t[i.HIGHTLIGHT_PLUS])||void 0===a?void 0:a.some((function(t){return e.indexOf(t)>=0})))},t}();e.Interpreter=n}));
//# sourceMappingURL=interpreter.interpreter.js.map
//# sourceMappingURL=interpreter.interpreter.js.map
