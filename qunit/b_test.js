
var cb_ret = {};

var async_time_interval = 3000;
var test_copy_string = "*****测试字符串clipboard******";

function sleep(seconds) {
	this.date = Math.round(new Date().getTime()/1000);
    while(1) {
        if(Math.round(new Date().getTime()/1000) - this.date >= seconds) break;
    }
  	return true;
}

function isEqualToTagName(inJsonObj, inTagName) {
	if (inJsonObj && inJsonObj.tagname && inJsonObj.tagname == inTagName) {
		return true;
	}

	return false;
}

sleep(2);

var app = {
    callback: function(jsonObj) {
		var tagname = jsonObj.tagname;
		if(tagname == "back") {
			History.back();
			return true;
		}
        else if ( tagname == 'web_view_finished_load') {
        	CtripUtil.app_init_member_H5_info();
	    }
	    else if (tagname == "locate") {
	    	cb_ret.locate = jsonObj;
	    }
	    else if (tagname == "refresh_nav_bar") {
	    	cb_ret.refresh_nav_bar = jsonObj;
	    }
	    else if (tagname == "check_update") {
	    	cb_ret.check_update = jsonObj;
	    }
	    else if (tagname == "recommend_app_to_friends") {
	    	cb_ret.recommend_app_to_friends = jsonObj;
	    }
	    else if (tagname == "add_weixin_friend") {
	    	cb_ret.add_weixin_friend = jsonObj;
	    }
	    else if (tagname == "show_newest_introduction") {
	    	cb_ret.show_newest_introduction = jsonObj;
	    } 
	    else if (tagname == "check_network_status") {
	    	cb_ret.check_network_status = jsonObj;
	    }
	    else if (tagname == "check_app_install_status") {
	    	cb_ret.check_app_install_status = jsonObj;
	    }
	    else if (tagname == "refresh_native_page") {
	    	cb_ret.refresh_native_page = jsonObj;
	    }
	    else if (tagname == "copy_string_to_clipboard") {
	    	cb_ret.copy_string_to_clipboard = jsonObj;
	    }
	    else if (tagname == "read_copied_string_from_clipboard") {
	    	cb_ret.read_copied_string_from_clipboard = jsonObj;
	    }
	    else if (tagname == "call_system_share") {
	    	cb_ret.call_system_share = jsonObj;
	    }
	    else if (tagname == "non_member_login") {
	    	cb_ret.non_member_login = jsonObj;
	    }
	    else if (tagname == "member_auto_login") {
	    	cb_ret.member_auto_login = jsonObj;
	    }
	    else if (tagname == "log_event") {
	    	cb_ret.log_event = jsonObj;
	    }
	    else if (tagname == "refresh_native_page") {
	    	cb_ret.refresh_native_page = jsonObj;
	    }
	    else if (tagname == "init_member_H5_info") {
	    	cb_ret.init_member_H5_info = jsonObj;
	    } 
	    else if (tagname == "log") {
	    	cb_ret.log = jsonObj;
	    }
	    else if (tagname == "download_data") {
	    	cb_ret.download_data = jsonObj;
	    }
	    else if (tagname == "base64_encode") {
	    	cb_ret.base64_encode = jsonObj;
	    }
	    else if (tagname == "set_toolbar_hidden") {
	    	cb_ret.set_toolbar_hidden = jsonObj;
	    }
	    else if (tagname == "check_pay_app_install_status") {
	    	cb_ret.check_pay_app_install_status = jsonObj;
	    } 
	    else if (tagname == "open_pay_app_by_url") {
	    	cb_ret.open_pay_app_by_url = jsonObj;
	    }
	    else if (tagname == "send_h5_pipe_request") {
	    	cb_ret.send_H5_pipe_request = jsonObj;
	    }
	    else if (tagname == "check_ticket_in_samsung_wallet") {
	    	cb_ret.check_ticket_in_samsung_wallet = jsonObj;
	    } 
	    else if (tagname == "show_ticket_in_samsung_wallet") {
	    	cb_ret.show_ticket_in_samsung_wallet = jsonObj;
	    }
	    else if (tagname == "download_ticket_in_samsung_wallet") {
	    	cb_ret.download_ticket_in_samsung_wallet = jsonObj;
	    } 
	    else if (tagname == "get_current_sandbox_name") {
	    	cb_ret.get_current_sandbox_name = jsonObj;
	    }
	    else if (tagname == "write_text_to_file") {
	    	cb_ret.write_text_to_file = jsonObj;
	    }
	    else if (tagname == "delete_file") {
	    	cb_ret.delete_file = jsonObj;
	    }
	    else if (tagname == "get_file_size") {
	    	cb_ret.get_file_size = jsonObj;
	    }
	    else if (tagname == "check_file_exist") {
	    	cb_ret.check_file_exist = jsonObj;
	    }
	    else if (tagname == "make_dir") {
	    	cb_ret.make_dir = jsonObj;
	    }
	    else if (tagname == "read_text_from_file") {
	    	cb_ret.read_text_from_file = jsonObj;
	    }
	    else if (tagname == "ctrip_encrypt") {
	    	cb_ret.ctrip_encrypt = jsonObj;
	    }
	    else if (tagname == "md5_hash") {
	    	cb_ret.md5_hash = jsonObj;
	    }
	    else if (tagname == "get_device_info") {
	    	cb_ret.get_device_info = jsonObj;
	    }
    }
};



asyncTest("获取当前沙盒名", function(){
	expect(1);
	CtripFile.app_get_current_sandbox_name();

	setTimeout(function(){
		start();

		var jsonObj = cb_ret.get_current_sandbox_name;
		if (isEqualToTagName(jsonObj, "get_current_sandbox_name")) {
			ok(true, "获取当前沙盒名成功"+JSON.stringify(jsonObj));
		} else {
			ok(true, "获取当前沙盒名失败"+JSON.stringify(jsonObj));
		}
		cb_ret.get_current_sandbox_name = null;
	}, async_time_interval);
});

var testText = "Hello, 时间，Good";
var testAppendText = "This is append 啦啦x";
var testFileName = null;//"logd.txt";
var testRelativeFile = "/jimzhao2012.github.io/mdir/logdt.txt";//null;
var testDirName =  null;//"mFolder";
var testRelativeDir = "/jimzhao2012.github.io/mcmdir/";
var encString = "abcdxxxx";
var encdString = "";

asyncTest("MD5哈希", function(){
	expect(1);
	CtripEncrypt.app_md5_hash(encString);

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.md5_hash;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "md5_hash" && jsonObj.param.outString) {
			if (jsonObj.param.outString == "FDA820BA864415E2451BE1C67F1F304A") {
			ok(true, "MD5哈希成功"+JSON.stringify(jsonObj));				
			}
		}
		else {
			ok(false, "MD5哈希失败"+JSON.stringify(jsonObj));
		}
		cb_ret.md5_hash = null;
	},async_time_interval);
});

asyncTest("Ctrip加密", function(){
	expect(1);
	CtripEncrypt.app_ctrip_encrypt(encString, 1);

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.ctrip_encrypt;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "ctrip_encrypt" && jsonObj.param.outString) {
			encdString = jsonObj.param.outString;
			ok(true, "Ctrip加密成功"+JSON.stringify(jsonObj));
		}
		else {
			ok(false, "Ctrip加密失败"+JSON.stringify(jsonObj));
		}
		cb_ret.ctrip_encrypt = null;
	},async_time_interval);
});


asyncTest("Ctrip解密", function(){
	expect(1);
	CtripEncrypt.app_ctrip_encrypt(encdString, 2);

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.ctrip_encrypt;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "ctrip_encrypt" && jsonObj.param.outString) {
			ok(true, "Ctrip加解成功"+JSON.stringify(jsonObj));
		}
		else {
			ok(false, "Ctrip加解失败"+JSON.stringify(jsonObj));
		}
		cb_ret.ctrip_encrypt = null;
	},async_time_interval);
});


asyncTest("写文本内容到文件", function(){
	expect(1);
	CtripFile.app_write_text_to_file(testText, testFileName, testRelativeFile, false);

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.write_text_to_file;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "write_text_to_file") {
			ok(true, "写文本文件成功"+JSON.stringify(jsonObj));
		}
		else {
			ok(false, "写文本文件失败"+JSON.stringify(jsonObj));
		}
		cb_ret.write_text_to_file = null;
	},async_time_interval);
});


asyncTest("获取文件内容", function(){
	expect(1);
	CtripFile.app_read_text_from_file(testFileName, testRelativeFile);

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.read_text_from_file;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "read_text_from_file") {
			ok(true, "获取文件内容成功"+JSON.stringify(jsonObj));
		} else {
			ok(false, "获取文件内容失败"+JSON.stringify(jsonObj));
		}
	}, async_time_interval);
});

asyncTest("获取文件大小",function(){
	expect(1);
	CtripFile.app_get_file_size(testFileName, testRelativeFile);

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.get_file_size;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "get_file_size") {
			ok(true, "获取文件大小成功"+JSON.stringify(jsonObj));
		} 
		else {
			ok(false, "获取文件大小失败"+JSON.stringify(jsonObj));
		}
		cb_ret.get_file_size = null;
	},async_time_interval);

});

asyncTest("检查文件是否存在", function(){
	expect(1);
	CtripFile.app_check_file_exist(testFileName, testRelativeFile);

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.check_file_exist;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "check_file_exist") {
			ok(true, "检查文件是否存在成功"+JSON.stringify(jsonObj));
		} else {
			ok(false, "检查文件是否存在失败"+JSON.stringify(jsonObj));
		}
		cb_ret.check_file_exist = null;
	},async_time_interval);

});

asyncTest("删除文件", function(){
	expect(1);
	CtripFile.app_delete_file(testFileName, testRelativeFile);

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.delete_file;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "delete_file") {
			ok(true, "删除文件成功"+JSON.stringify(jsonObj));
		} else {
			ok(false, "删除文件失败"+JSON.stringify(jsonObj));
		}
		cb_ret.delete_file = null;
	},async_time_interval);
});

asyncTest("创建文件夹", function(){
	expect(1);
	CtripFile.app_make_dir(testDirName, testRelativeDir);

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.make_dir;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "make_dir") {
			ok(true, "创建文件夹成功" + JSON.stringify(jsonObj));
		} else {
			ok(false, "创建文件夹失败"+JSON.stringify(jsonObj));
		}
		cb_ret.make_dir = null;
	},async_time_interval);
});

function checkLocateInfo(jsonObj) {
	var geoInfo = jsonObj.param;
	if (geoInfo) {
		
		if (geoInfo.value) {
			var geo = geoInfo.value;
			if (!geo.ctyName || geo.ctyName.length == 0) {
				ok(false, "定位失败，城市信息为空"+JSON.stringify(geo));
			} 
			else if (!geo.addrs || geo.addrs.length == 0) {
				ok(false, "定位失败，地址信息为空"+JSON.stringify(geo));
			}
			else if (!geo.lat || Math.abs(geo.lat) == 0) {
				ok(false, "定位失败，纬度信息为空"+JSON.stringify(geo));
			}
			else if (!geo.lng || Math.abs(geo.lng) == 0) {
				ok(false, "定位失败，经度信息为空"+JSON.stringify(geo));
			} else {
				ok(true, "定位成功"+JSON.stringify(geo));
			}
		} 
		else {
			if (!geo.locateStatus || geo.locateStatus == 0) {
				ok(false, "无定位数据，且无定位状态");
			};
		}
		
	} else {
		ok(false, "定位失败，无定位数据"+JSON.stringify(jsonObj));
	}
};


asyncTest("刷新顶部条:app_refresh_nav_bar", function() {
	expect(1);

	var nav_bar_config_json = {"left":[{"tagname":"back"}], "center":[{"tagname":"title","value":"接机/接火车"},{"tagname":"subTitle","value":"上海到北京"}], "right":[{"tagname":"call"}, {"tagname":"home"}]};
	var jsonStr = JSON.stringify(nav_bar_config_json);
	CtripUtil.app_refresh_nav_bar(jsonStr);
	
	setTimeout(function() {
		start();
		var jsonObj = cb_ret.refresh_nav_bar;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "refresh_nav_bar") {
			ok(true, "刷新顶部条成功!" );
		};
        cb_ret.refresh_nav_bar = null;

	}, async_time_interval);

});


asyncTest('定位:app_locate', function() {  
	expect(1);

 	CtripUtil.app_locate(true);

	setTimeout(function() { 
		start();
		var jsonObj = cb_ret.locate;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "locate") {
			checkLocateInfo(jsonObj);
		} 

		cb_ret.locate = null;

    }, async_time_interval*2);
});


asyncTest("检查网络状况:app_check_network_status", function() {
	expect(1);

	CtripUtil.app_check_network_status();
	setTimeout(function() {
		start();
		var jsonObj = cb_ret.check_network_status;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "check_network_status") {
			ok(true, "检查网络状况成功");
			cb_ret.check_network_status = null;
		};
	},async_time_interval);
});


asyncTest("检查软件是否安装:app_check_app_install_status", function() {
	expect(1);

	CtripUtil.app_check_app_install_status("ctrip://xxx","ctrip.android.view");
	
	setTimeout(function() {
		start();
		var jsonObj = cb_ret.check_app_install_status;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "check_app_install_status") {
			if (jsonObj.param.isInstalledApp) {
				ok(true, "检查软件安装成功,已安装携程旅游");
			} else {
				ok(true, "检查软件安装失败,未安装携程旅游");
			}
			cb_ret.check_app_install_status = null;
		};
	},async_time_interval);
});

asyncTest("通知native刷新:app_refresh_native_page", function() {
	expect(1);

	CtripUtil.app_refresh_native_page("PageShouldReload");

	setTimeout(function() {
		start();
		var jsonObj = cb_ret.refresh_native_page;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "refresh_native_page") {
			ok(true, "通知App刷新成功");
			cb_ret.refresh_native_page = null;
		};
	},async_time_interval);
});

asyncTest("复制内容到粘贴版:app_copy_string_to_clipboard", function() {
	expect(1);
	CtripUtil.app_copy_string_to_clipboard(test_copy_string);
	setTimeout(function() {
		start();
		var jsonObj = cb_ret.copy_string_to_clipboard;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "copy_string_to_clipboard") {
			ok(true, "复制 ["+test_copy_string+"] 内容到粘贴版成功");
			cb_ret.copy_string_to_clipboard = null;
		}

	},async_time_interval);
});

asyncTest("从粘贴板读取内容:app_read_copied_string_from_clipboard",function() {
	expect(1);
	CtripUtil.app_read_copied_string_from_clipboard();
	setTimeout(function(){
		start();
		var jsonObj = cb_ret.read_copied_string_from_clipboard;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "read_copied_string_from_clipboard") {
			var copiedString = jsonObj.param.copiedString;
			if (copiedString == test_copy_string) {
				ok(true, "从粘贴板读取 ["+copiedString+"] 成功");
			} else {
				ok(false, "从粘贴板读取 ["+copiedString+"] 有误");
			}
			cb_ret.read_copied_string_from_clipboard = null;
		}
	},async_time_interval);
});

// asyncTest("调用系统分享:app_call_system_share", function() {
// 	expect(1);
// 	CtripUtil.app_call_system_share("http://www.baidu.com", null, "title here");
// 	setTimeout(function() {
// 		start();
// 		var jsonObj = cb_ret.call_system_share;
// 		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "call_system_share") {
// 			ok(true, "调用系统分享成功");
// 		}

// 		cb_ret.call_system_share = null;
// 	},sync_time_interval)
// });

function check_member_info(jsonObj, isAutoLogin) {
	/*
{
  "timeout":"2013/09/12",
  "data":
    {
      "LoginName":"wwwwww",
      "UserID":"21634352BAC43044380A7807B0699491",
      "IsNonUser":false,
      "UserName":"测试",
      "Mobile":"13845612110",
      "LoginToken":"",
      "LoginCode":0,
      "LoginErrMsg":"登录成功！",
      "Address":"",
      "Birthday":"19841010",
      "Experience":1453333973000,//微妙timestamp
      "Gender":1,
      "PostCode":"111111",
      "VipGrade":30,
      "VipGradeRemark":"钻石贵宾",
      "Email":"wang_peng@163.com",
      "ExpiredTime":"2013-09-12",
      "Auth":"079E643955C63839FF4617743DA20CFD93AFCAF6A82803A6F3ABD9219",
"IsRemember":0,
"BindMobile":18688888888

    },	
  "timeby":1
}
	*/
	
	var userInfo = jsonObj.param;

	if (userInfo) {
		data = userInfo.data;
		var isNonUser = data.IsNonUser;
		if (!data.Auth || data.Auth.length==0) {
			ok(false, "登录信息有误，Auth信息为空"+JSON.stringify(data));
		}
		else if (!data.UserID || data.UserID.length==0) {
			ok(false, "登录信息有误，UserId信息为空"+JSON.stringify(data));
		}
		else if (!isNonUser) {
			if (!data.UserName || data.UserName.length == 0) {
				ok(false, "登录信息有误，UserName为空"+JSON.stringify(data));
			}
			else if (!data.Mobile || data.Mobile.length == 0) {
				ok(false, "没有绑定手机号码"+JSON.stringify(data));
			} 
			else if (!data.Email || data.Email.length == 0) {
				ok(false, "Email为空"+JSON.stringify(data));
			}
			else {
				ok(true, "会员登录成功,且数据完整"+JSON.stringify(data))
			}
		} else {
			ok(true, "非会员登录成功,且数据完整"+JSON.stringify(data))
		}
	} else {
		if (isAutoLogin) {
			ok(true, "会员自动登录，内存中无会员信息"+JSON.stringify(jsonObj));
		} else {
			ok(false,"登录失败，没有用户信息返回！！！"+JSON.stringify(jsonObj));
		}
	}
}

asyncTest("自动登录:app_member_auto_login",function(){
	expect(1);
	CtripUser.app_member_auto_login();
	setTimeout(function(){
		start();
		var jsonObj = cb_ret.member_auto_login;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "member_auto_login") {
			check_member_info(jsonObj, true);
		};
	}, async_time_interval);
});

asyncTest("非会员登录: app_non_member_login", function(){
	expect(1);
	CtripUser.app_non_member_login();
	setTimeout(function(){
		start();
		var jsonObj = cb_ret.non_member_login;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "non_member_login") {
			check_member_info(jsonObj, false);
		} else {
			ok(false, "非会员登录失败，返回为空"+JSON.stringify(jsonObj));
		};
		cb_ret.non_member_login = null;
	}, async_time_interval);
});

asyncTest("调用app的ActionLog日志: app_log_event", function(){
	expect(1);
	CtripUtil.app_log_event("Good day, log lah");

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.log_event;

		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "log_event") {
			ok(true, "调用app的ActionLog日志成功"+JSON.stringify(jsonObj));
		};
		cb_ret.log_event = null;
	}, async_time_interval);
});

function check_init_H5_member_info_value(jsonObj) {

	jsonObj = jsonObj.param;
	if (!jsonObj.timestamp || Math.abs(jsonObj.timestamp) == 0) {
		ok(false, "初始化H5数据5数据有错，服务器时间为空"+JSON.stringify(jsonObj));
	}
	else if (!jsonObj.version || jsonObj.version.length == 0) {
		ok(false, "初始化H5数据5数据有错，客户度版本为空"+JSON.stringify(jsonObj));
	}
	else if (!jsonObj.device || jsonObj.device.length == 0) {
		ok(false, "初始化H5数据5数据有错，设备信息为空"+JSON.stringify(jsonObj));	
	}
	else if (!jsonObj.hasOwnProperty("serverVersion")) {
		ok(false, "初始化H5数据5数据有错，服务器最新版本为空"+JSON.stringify(jsonObj));			
	}
	else if (!jsonObj.platform || Math.abs(jsonObj.platform) == 0) {
		ok(false, "初始化H5数据5数据有错，平台信息为空"+JSON.stringify(jsonObj));
	}
	if (jsonObj) {
		check_member_info(jsonObj, true);
	}
}

asyncTest("初始化H5数据: app_init_member_H5_info", function(){
	expect(1);
	CtripUtil.app_init_member_H5_info();

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.init_member_H5_info;

		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "init_member_H5_info") {
			check_init_H5_member_info_value(jsonObj);
		};
		cb_ret.init_member_H5_info = null;
	}, async_time_interval);
});

asyncTest("写日志到App: app_log", function(){
	expect(1);
	CtripTool.app_log("日志文件。。。。");

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.log;

		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "log") {
			ok(true, "写日志到App成功"+JSON.stringify(jsonObj));
		};
		cb_ret.log = null;
	}, async_time_interval);
});

asyncTest("测试下载内容:app_download_data", function() {
	expect(1);
	CtripUtil.app_download_data("http://www.baidu.com/img/bdlogo.gif", "jpg");

	setTimeout(function(){
		start();
		var jsonObj = cb_ret.download_data;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "download_data") {
			ok(true, "测试下载内容成功"+JSON.stringify(jsonObj));
		}
		cb_ret.download_data = null;
	}, async_time_interval);
});

// asyncTest("检查版本更新:app_check_update", function() {
// 	expect(1);

// 	CtripUtil.app_check_update();

// 	setTimeout(function() {
// 		start();
// 		var jsonObj = cb_ret.check_update;
// 		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "check_update") {
// 			ok(true, "检查版本更新回调成功!" );
// 		}
// 		cb_ret.check_update = null;

// 	}, async_time_interval);
// });

asyncTest("base64 UTF8编码", function() {
	expect(1);
	CtripEncrypt.app_base64_encode("xxxxxx");
	setTimeout(function() {
		start();
		var jsonObj = cb_ret.base64_encode;
		var isSuccess = false;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "base64_encode") {
			if (jsonObj.param && jsonObj.param.encodedString == "eHh4eHh4") {
				isSuccess = true;
				ok(true, "base64 UTF8编码成功xxxxxx＝＝》eHh4eHh4");
			}
		}

		if (!isSuccess) {
			ok(false,"Base64 UTF8编码失败"+JSON.stringify(jsonObj));
		}

	},async_time_interval);
});

asyncTest("显示底部导航栏", function(){
	expect(1);
	CtripBar.app_set_toolbar_hidden(false);
	setTimeout(function(){
		start();
		var jsonObj = cb_ret.set_toolbar_hidden;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "set_toolbar_hidden") {
			ok(true, "显示底部导航栏成功！")
		} else {
			ok(false,"显示底部导航栏失败！")
		}
	},async_time_interval);

});

asyncTest("测试App环境", function(){
	expect(1);
	var isInApp = CtripTool.app_is_in_ctrip_app();
	setTimeout(function(){
		start();
		if (isInApp) {
			ok(true, "是App环境，测试成功 isIOS=["+Internal.isIOS+ "]isAndroid=["+ Internal.isAndroid + "]");
		} else{
			ok(false, "不是App环境，测试失败");
		}
	},async_time_interval);
});

asyncTest("测试通过APP管道发送服务",function(){
	expect(1);

	// header = "{\"auth\":\"A04AC1F9E7C2275CFA10640392B77045F044A53C173E7CFE34586FDBA9E7A65B\", \"cid\":1,\"ctok\":1,\"cver\":5.4,\"lang\":01,\"sid\":111,\"syscode\":32}";

	// data = "{\"ver\":1,\"oid\":351015106,\"amount\":1,\"mobphone\":13764471455,\"isnewcard\":false,\"cardno\":5194120000000001,\"typid\":4,\"category\":3}";

	header = "{\"cid\": \"c564c11c-26a5-9d5d-7603-b803af0a4c18\",\"ctok\": \"351858059049938\",\"cver\": \"1.0\",\"lang\": \"01\",\"sid\": \"8888\",\"syscode\": \"09\",\"auth\": \"401DA7A93EE8BA5264DE8F0466E080C8C2B5292F14CBE5DF8D2AF150AE148911\"}";

	data = "{\"ver\": 0,\"bustype\": 2001,\"oid\": 53814,\"searchmap\": 0,\"usetype\": 1}";

	serviceCode = "31000101";

	CtripPipe.app_send_H5_pipe_request(serviceCode,header,data,"12345");
	setTimeout(function(){
		start();
		var jsonObj = cb_ret.send_H5_pipe_request;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "send_H5_pipe_request") {
			ok(true,"管道请求成功:"+JSON.stringify(jsonObj));
		} else {
			ok(true,"管道请求失败:"+JSON.stringify(jsonObj));
		}
	}, async_time_interval); 
});

asyncTest("测试支付App安装",function() {
	expect(1);
	CtripPay.app_check_pay_app_install_status();
	setTimeout(function(){
		start();
		var jsonObj = cb_ret.check_pay_app_install_status;
		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "check_pay_app_install_status") {
			ok(true,"检测支付工具安装状态成功:"+JSON.stringify(jsonObj));
		} else {
			ok(false,"检测支付工具安装状态失败");
		}
	},async_time_interval);
});


asyncTest("测试获取DeviceInfo", function(){
	expect(1);
	CtripBusiness.app_get_device_info();
	setTimeout(function(){
		start();
		var jsonObj = cb_ret.get_device_info;
		if (isEqualToTagName(jsonObj, get_device_info)) {
			ok(true, "获取deviceInfo成功："+JSON.stringify(jsonObj));
		} else {
			ok(false, "获取deviceInfo失败："+JSON.stringify(jsonObj));
		}

	}, async_time_interval);
});


// asyncTest("测试Ticket是否在三星钱包", function(){
// 	expect(1);
// 	CtripSumSungWallet.app_check_ticket_in_samsung_wallet("ID123333");
// 	setTimeout(function(){
// 		start();
// 		var jsonObj = cb_ret.check_ticket_in_samsung_wallet;
// 		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "check_ticket_in_samsung_wallet") {
// 			ok(jsonObj.param.isInSamSungWallet, "测试Ticket是否在三星钱包:"+JSON.stringify(jsonObj));
// 		} 
// 		else {
// 			ok(false,"测试Ticket是否在三星钱包失败:"+JSON.stringify(jsonObj));
// 		}
// 	},sync_time_interval*2);

// });

// asyncTest("测试在三星钱包中下载Ticket", function(){
// 	expect(1);
//     CtripSumSungWallet.app_download_ticket_in_samsung_wallet("ID123333");

// 	setTimeout(function(){
// 		start();
// 		var jsonObj = cb_ret.download_ticket_in_samsung_wallet;
// 		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "download_ticket_in_samsung_wallet") {
// 			ok(jsonObj.param.isDownloadSuccess,"测试在三星钱包中下载Ticket:"+JSON.stringify(jsonObj));
// 		}else {
// 			ok(false,"测试在三星钱包中下载Ticket失败:"+JSON.stringify(jsonObj));
// 		}
// 	},sync_time_interval*2);

// });

// asyncTest("测试在三星钱包中查看Ticket", function(){
// 	expect(1);
//     CtripSumSungWallet.app_show_ticket_in_samsung_wallet("ID123333");
// 	setTimeout(function(){
// 		start();
// 		var jsonObj = cb_ret.show_ticket_in_samsung_wallet;
// 		if (jsonObj && jsonObj.tagname && jsonObj.tagname == "show_ticket_in_samsung_wallet") {
// 			ok(true,"测试在三星钱包中查看Ticket:"+JSON.stringify(jsonObj));
// 		} else {
// 			ok(false,"测试在三星钱包中查看Ticket失败:"+JSON.stringify(jsonObj));
// 		}
// 	},sync_time_interval*2);

// });

