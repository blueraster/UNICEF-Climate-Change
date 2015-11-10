﻿define(
	 ({
		viewer: {
			common: {
				close: "關閉"
			},
			loading: {
				long: "應用程式正在初始化",
				long2: "謝謝等候",
				failButton: "重新載入應用程式"
			},
			signin: {
				title: "需要進行身份驗證",
				explainViewer: "請使用帳戶登錄 %PORTAL_LINK%，以存取應用程式。",
				explainBuilder: "請使用帳戶登錄 %PORTAL_LINK%，以設定應用程式。"
			},
			errors: {
				boxTitle: "發生錯誤",
				invalidConfig: "設定無效",
				invalidConfigNoApp: "未在 index.html 中指定 Web 製圖應用程式識別碼。",
				unspecifiedConfigOwner: "尚未設定授權的擁有者。",
				invalidConfigOwner: "未授權應用程式擁有者。",
				createMap: "無法建立地圖",
				invalidApp: "%TPL_NAME% 不存在或不可存取。",
				appLoadingFail: "發生了一些錯誤， %TPL_NAME% 未正確載入。",
				notConfiguredDesktop: "應用程式尚未設定。",
				notConfiguredMobile: "%TPL_NAME% 建構器不支援此螢幕解析度。",
				notAuthorized: "您未取得存取該應用程式的授權",
				noBuilderIE: "低於版本 %VERSION% 的 Internet Explorer 不支援建構器。%UPGRADE%",
				noViewerIE: "低於版本 %VERSION% 的 Internet Explorer 不支援該應用程式。%UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>請更新您的瀏覽器</a>。",
				mapLoadingFail: "發生了一些錯誤，地圖未正確載入。",
				signOut: "登出"
			},
			mobileInfo: {
				legend: "圖例",
				description: "描述",
				lblLegendMobileError: "抱歉，圖例不可用。請重新載入應用程式。",
				lblLegendMobileErrorExplain: "如果設備在載入應用程式後旋轉到縱向模式，則圖例無法使用。"
			},
			mobileFooter: {
				swipeInvite: "滑動瀏覽故事",
				lblNext: "下一步",
				lblEnd: "您已到達故事末尾"
			},
			headerFromCommon: {
				storymapsText: "故事地圖",
				builderButton: "編輯",
				facebookTooltip: "在 Facebook 上分享",
				twitterTooltip: "在 Twitter 上分享",
				bitlyTooltip: "取得短連結",
				templateTitle: "設置範本標題",
				templateSubtitle: "設置範本子標題",
				share: "分享"
			},
			overviewFromCommon: {
				title: "總覽圖"
			},
			legendFromCommon: {
				title: "圖例"
			},
			shareFromCommon: {
				copy: "複製",
				copied: "已複製",
				open: "打開",
				embed: "嵌入到網頁",
				embedExplain: "使用以下 HTML 代碼將應用程式嵌入到網頁。",
				size: "大小(寬度/高度):"
			}
        }
    })
);