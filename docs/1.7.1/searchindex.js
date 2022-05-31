Search.setIndex({docnames:["index","sections/aa_plugins","sections/aa_plugins/aa_plugin_aa_plugin","sections/aa_plugins/aa_plugin_common_configuration","sections/aa_plugins/aa_plugin_connection_information","sections/aa_plugins/aa_plugin_development","sections/aa_plugins/aa_plugin_plugin_response","sections/about","sections/changelog","sections/credentialstore_plugins","sections/credentialstore_plugins/credentialstore_plugin_common_configuration","sections/credentialstore_plugins/credentialstore_plugin_credentialstore_plugin","sections/credentialstore_plugins/credentialstore_plugin_development","sections/getting_started","sections/history","sections/intro","sections/mfa_client","sections/plugin_base","sections/pluginv","sections/services","sections/services/service_base_exceptions","sections/services/service_credential_store","sections/services/service_endpoint_extractor","sections/services/service_host_resolver","sections/services/service_ldap_server","sections/services/service_logging","sections/services/service_memory_cache","sections/services/service_plugin_configuration","sections/services/service_requests_tls","sections/services/service_user_list","sections/testing","sections/testing/fakes","sections/testing/fakes/fake_credential_store","sections/testing/fakes/fake_ldap_server","sections/testing/fakes/fake_user_list"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,sphinx:56},filenames:["index.rst","sections/aa_plugins.rst","sections/aa_plugins/aa_plugin_aa_plugin.rst","sections/aa_plugins/aa_plugin_common_configuration.rst","sections/aa_plugins/aa_plugin_connection_information.rst","sections/aa_plugins/aa_plugin_development.rst","sections/aa_plugins/aa_plugin_plugin_response.rst","sections/about.rst","sections/changelog.rst","sections/credentialstore_plugins.rst","sections/credentialstore_plugins/credentialstore_plugin_common_configuration.rst","sections/credentialstore_plugins/credentialstore_plugin_credentialstore_plugin.rst","sections/credentialstore_plugins/credentialstore_plugin_development.rst","sections/getting_started.rst","sections/history.rst","sections/intro.rst","sections/mfa_client.rst","sections/plugin_base.rst","sections/pluginv.rst","sections/services.rst","sections/services/service_base_exceptions.rst","sections/services/service_credential_store.rst","sections/services/service_endpoint_extractor.rst","sections/services/service_host_resolver.rst","sections/services/service_ldap_server.rst","sections/services/service_logging.rst","sections/services/service_memory_cache.rst","sections/services/service_plugin_configuration.rst","sections/services/service_requests_tls.rst","sections/services/service_user_list.rst","sections/testing.rst","sections/testing/fakes.rst","sections/testing/fakes/fake_credential_store.rst","sections/testing/fakes/fake_ldap_server.rst","sections/testing/fakes/fake_user_list.rst"],objects:{"safeguard.sessions.plugin":[[2,0,0,"module-0","aa_plugin"],[4,0,0,"module-0","connection_info"],[21,0,0,"module-0","credential_store"],[21,0,0,"-","credential_store_exceptions"],[11,0,0,"module-0","credentialstore_plugin"],[22,0,0,"module-0","endpoint_extractor"],[20,0,0,"module-0","exceptions"],[23,0,0,"module-0","host_resolver"],[24,0,0,"module-0","ldap_server"],[24,0,0,"-","ldap_server_exceptions"],[25,0,0,"module-0","logging"],[26,0,0,"module-0","memory_cache"],[16,0,0,"module-0","mfa_client"],[27,0,0,"module-0","plugin_configuration"],[27,0,0,"-","plugin_configuration_exceptions"],[6,0,0,"module-0","plugin_response"],[28,0,0,"module-0","requests_tls"],[29,0,0,"module-0","user_list"],[29,0,0,"-","user_list_exceptions"]],"safeguard.sessions.plugin.aa_plugin":[[2,1,1,"","AAPlugin"]],"safeguard.sessions.plugin.aa_plugin.AAPlugin":[[2,2,1,"","_add_gateway_user"],[2,2,1,"","_authentication_steps"],[2,2,1,"","_authorization_steps"],[2,2,1,"","_check_username"],[2,2,1,"","_extract_mfa_password"],[2,2,1,"","_extract_username"],[2,2,1,"","_map_username_explicit"],[2,2,1,"","_map_username_ldap"],[2,2,1,"","_post_successful_authentication_steps"],[2,2,1,"","_session_ended_steps"],[2,2,1,"","_transform_username"],[2,2,1,"","authenticate"],[2,2,1,"","authorize"],[2,3,1,"","connection"],[2,3,1,"","cookie"],[2,2,1,"","do_authenticate"],[2,2,1,"","do_authorize"],[2,2,1,"","do_session_ended"],[2,3,1,"","mfa_identity"],[2,3,1,"","mfa_password"],[2,3,1,"","session_cookie"],[2,2,1,"","session_ended"],[2,3,1,"","username"]],"safeguard.sessions.plugin.connection_info":[[4,1,1,"","ConnectionInfo"]],"safeguard.sessions.plugin.connection_info.ConnectionInfo":[[4,4,1,"","client_hostname"],[4,4,1,"","client_ip"],[4,4,1,"","client_port"],[4,4,1,"","connection_name"],[4,4,1,"","gateway_domain"],[4,4,1,"","gateway_groups"],[4,4,1,"","gateway_password"],[4,4,1,"","gateway_user"],[4,4,1,"","gateway_username"],[4,4,1,"","key_value_pairs"],[4,4,1,"","protocol"],[4,4,1,"","server_domain"],[4,4,1,"","server_hostname"],[4,4,1,"","server_ip"],[4,4,1,"","server_port"],[4,4,1,"","server_username"],[4,4,1,"","session_id"],[4,4,1,"","target_domain"],[4,4,1,"","target_host"],[4,4,1,"","target_ip"],[4,4,1,"","target_port"],[4,4,1,"","target_server"],[4,4,1,"","target_username"]],"safeguard.sessions.plugin.credential_store":[[21,1,1,"","CredentialStore"]],"safeguard.sessions.plugin.credential_store.CredentialStore":[[21,2,1,"","from_config"],[21,2,1,"","get_all"],[21,2,1,"","get_certificates"],[21,2,1,"","get_credentials"],[21,2,1,"","get_keys"],[21,2,1,"","get_passwords"]],"safeguard.sessions.plugin.credential_store_exceptions":[[21,5,1,"","LocalCredentialStoreNotFound"]],"safeguard.sessions.plugin.credentialstore_plugin":[[11,1,1,"","CredentialStorePlugin"],[11,5,1,"","InvalidUsageException"],[11,1,1,"","RemoteAppInfo"]],"safeguard.sessions.plugin.credentialstore_plugin.CredentialStorePlugin":[[11,2,1,"","_generate_accounts"],[11,2,1,"","_generate_assets"],[11,3,1,"","account"],[11,3,1,"","asset"],[11,3,1,"","authentication_password"],[11,3,1,"","authentication_username"],[11,3,1,"","connection"],[11,3,1,"","cookie"],[11,2,1,"","do_authentication_completed"],[11,2,1,"","do_check_in_credential"],[11,2,1,"","do_get_password_list"],[11,2,1,"","do_get_private_key_list"],[11,2,1,"","do_get_remote_app_credentials"],[11,2,1,"","do_session_ended"],[11,3,1,"","remote_app_account"],[11,3,1,"","remote_app_asset"],[11,3,1,"","session_cookie"]],"safeguard.sessions.plugin.endpoint_extractor":[[22,5,1,"","EndpointException"],[22,1,1,"","EndpointExtractor"]],"safeguard.sessions.plugin.endpoint_extractor.EndpointExtractor":[[22,3,1,"","base_url"],[22,2,1,"","extract_data_from_endpoint"],[22,2,1,"","invoke_http_method"]],"safeguard.sessions.plugin.exceptions":[[20,1,1,"","PluginSDKExceptionFormatter"],[20,5,1,"","PluginSDKRuntimeError"],[20,5,1,"","PluginSDKRuntimeWarning"],[20,5,1,"","PluginSDKValueError"]],"safeguard.sessions.plugin.exceptions.PluginSDKExceptionFormatter":[[20,2,1,"","append_variables"]],"safeguard.sessions.plugin.host_resolver":[[23,1,1,"","HostResolver"]],"safeguard.sessions.plugin.host_resolver.HostResolver":[[23,2,1,"","from_config"],[23,2,1,"","resolve_hosts_by_ip"]],"safeguard.sessions.plugin.ldap_server":[[24,1,1,"","LDAPServer"]],"safeguard.sessions.plugin.ldap_server.LDAPServer":[[24,2,1,"","filter_user_groups"],[24,2,1,"","from_config"],[24,2,1,"","get_user_string_attribute"],[24,2,1,"","get_user_string_attributes"]],"safeguard.sessions.plugin.ldap_server_exceptions":[[24,5,1,"","LDAPOperationError"],[24,5,1,"","LDAPUserNotFound"]],"safeguard.sessions.plugin.logging":[[25,6,1,"","configure"],[25,6,1,"","get_logger"]],"safeguard.sessions.plugin.memory_cache":[[26,1,1,"","MemoryCache"]],"safeguard.sessions.plugin.memory_cache.MemoryCache":[[26,2,1,"","from_config"],[26,2,1,"","get"],[26,2,1,"","set"]],"safeguard.sessions.plugin.mfa_client":[[16,5,1,"","MFAAuthenticationFailure"],[16,1,1,"","MFAClient"],[16,5,1,"","MFACommunicationError"],[16,5,1,"","MFAServiceUnreachable"]],"safeguard.sessions.plugin.mfa_client.MFAClient":[[16,2,1,"","execute_authenticate"],[16,2,1,"","otp_authenticate"],[16,2,1,"","push_authenticate"]],"safeguard.sessions.plugin.plugin_base":[[17,1,1,"","PluginBase"],[17,2,1,"","cookie_property"],[17,2,1,"","lazy_property"],[17,2,1,"","named_cookie_property"],[17,2,1,"","session_cookie_property"]],"safeguard.sessions.plugin.plugin_base.PluginBase":[[17,3,1,"","box_configuration"],[17,3,1,"","cookie"],[17,3,1,"","https_proxy_enabled"],[17,3,1,"","https_proxy_password"],[17,3,1,"","https_proxy_port"],[17,3,1,"","https_proxy_server"],[17,3,1,"","https_proxy_username"],[17,3,1,"","logger"],[17,3,1,"","plugin_configuration"],[17,3,1,"","proxy_settings"],[17,3,1,"","session_cookie"]],"safeguard.sessions.plugin.plugin_configuration":[[27,1,1,"","PluginConfiguration"]],"safeguard.sessions.plugin.plugin_configuration.PluginConfiguration":[[27,2,1,"","get"],[27,2,1,"","get_ca_certificate"],[27,2,1,"","get_certificate"],[27,2,1,"","get_key"],[27,2,1,"","get_options"],[27,2,1,"","getboolean"],[27,2,1,"","getfloat"],[27,2,1,"","getienum"],[27,2,1,"","getint"],[27,2,1,"","getlist"]],"safeguard.sessions.plugin.plugin_configuration_exceptions":[[27,5,1,"","RequiredConfigurationSettingNotFound"]],"safeguard.sessions.plugin.plugin_response":[[6,1,1,"","AAResponse"],[6,1,1,"","DenyReasons"]],"safeguard.sessions.plugin.plugin_response.AAResponse":[[6,2,1,"","accept"],[6,2,1,"","deny"],[6,2,1,"","need_info"],[6,2,1,"","with_additional_metadata"],[6,2,1,"","with_cookie"],[6,2,1,"","with_gateway_user"],[6,2,1,"","with_reason"],[6,2,1,"","with_session_cookie"]],"safeguard.sessions.plugin.plugin_response.DenyReasons":[[6,4,1,"","authentication_failure"],[6,4,1,"","backend_service_error"],[6,4,1,"","communication_error"]],"safeguard.sessions.plugin.user_list":[[29,1,1,"","UserList"]],"safeguard.sessions.plugin.user_list.UserList":[[29,2,1,"","check_user"],[29,2,1,"","from_config"]],"safeguard.sessions.plugin.user_list_exceptions":[[29,5,1,"","LocalUserListNotFound"]],"safeguard.sessions.plugin_fakes":[[32,0,0,"-","credential_store"],[33,0,0,"-","ldap_server"],[34,0,0,"-","user_list"]],"safeguard.sessions.plugin_impl":[[32,0,0,"-","credential_store"],[33,0,0,"-","ldap_server"],[34,0,0,"-","user_list"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","property","Python property"],"5":["py","exception","Python exception"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:property","5":"py:exception","6":"py:function"},terms:{"0":[0,3,4,5,6,9,10,11,13,14,16,17,18,24,26,27,28],"1":[0,3,4,5,6,7,9,10,11,13,14,16,18,24,27,28],"10":5,"1000":33,"15":5,"2":[0,4,9,11,14,18,27],"20mb":8,"24":7,"2fa":30,"3":[0,13,14,15,18,27,28],"300":26,"306":7,"365":7,"3rd":6,"4":[0,3,10,13,14,24],"42":[17,26],"5":[0,4,14],"6":[0,6,11,13,14,16],"7":[0,11,14],"720":26,"8":[8,24],"800":7,"90":5,"9329":7,"boolean":27,"break":13,"byte":22,"case":[2,4,5,11,16,17,26,27,29,30],"class":[0,1,2,4,5,6,8,9,11,12,15,16,17,19,21,22,23,24,25,26,27,28,29],"default":[2,5,6,8,11,16,17,18,25,26,27,28,29,34],"do":[2,5,8,12,18,21,23,24,26,29,30],"final":[2,5,18],"float":27,"function":[0,1,2,3,4,8,9,10,11,19,27],"import":[5,6,12,16,17,21,24,25,26,27,28,29,30,32,33,34],"int":[26,27],"new":[2,3,4,5,6,8,9,10,11,12,16,18,24,27,28,30],"public":8,"return":[2,5,6,11,12,16,17,20,21,22,23,24,25,26,27,29],"super":[5,12,16],"throw":27,"true":[11,16,29,34],"try":6,"while":[6,7,18],A:[4,5,30],And:5,As:2,By:25,For:[2,4,5,7,8,12,13,16,21,30],If:[2,5,8,11,12,13,18,22,27,28,30],In:[2,4,5,11,12,13,16,24,26,27,29],It:[2,4,5,11,16,17,18,22],Its:17,Not:20,Of:30,On:[2,5,11,12,24,25],One:[7,15,25],The:[1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34],Then:30,There:[1,5,8,9,12,13],These:30,To:[5,11,12,13,17,18,19,28,30,32,33,34],With:[18,25],__config:[21,24,26,29],__cred_stor:21,__init__:[5,12,16,17,21,24,25,26,29],__init__cal:12,__ldap:24,__mem_cach:26,__name__:[5,25],__user_list:29,_add_gateway_us:2,_ask_mfa_password:2,_ask_quest:2,_authentication_step:[2,5],_authorization_step:2,_check_and_increase_client_connection_count:2,_check_authentication_cach:2,_check_ldap_group_whitelist:2,_check_user_list_whitelist:2,_check_usernam:2,_create_trusted_ca:8,_decrease_client_connection_count:2,_extract_mfa_password:2,_extract_usernam:2,_generate_account:[8,11],_generate_asset:[8,11],_log:25,_log_authenticate_calculated_mfa_ident:2,_log_authorize_calculated_mfa_ident:2,_map_username_explicit:2,_map_username_ldap:2,_plugin_config:25,_post_successful_authentication_step:2,_refresh_authentication_cach:2,_session_ended_step:2,_transform_usernam:[2,5],aa:[0,2,3,4,6,8,13,16,18],aa_plugin:2,aaplugin:[0,1,5,16,17],aarespons:[2,5,6,16],about:[0,5,18],abov:[5,11,12,15,30],accept:[2,5,6],access:[2,4,5,7,12,17,21,23,24,26,27,29,30],accord:18,account:[7,8,11,12],acm:16,acmecli:16,acmeplugin:16,acquir:[0,5,19],activ:18,actual:[2,24],ad:[0,1,9,24],add:[2,5,8,12,13,18,20],addit:[0,1,6,12,20,27],additional_metadata:6,address:[4,5,7,8,17,23],admin:33,administr:[0,1,8,9,18,24,29],adminus:33,adserv:33,advis:5,after:[2,5,11,12,18,28,30],again:[2,11],against:[11,27,29],agil:7,algorithm:26,alia:23,all:[2,4,5,11,12,17,18,21,25,26,27,28,30],all_us:29,allkei:26,allow:[5,8,27,29,34],along:30,alpha:14,alreadi:[2,4,30],also:[1,2,4,5,8,9,11,12,17,18,20,30],alter:[0,1,2],alwai:[4,17,26,30],amp:30,an:[2,4,5,6,8,13,16,17,18,20,21,22,23,24,25,27,29],ani:[1,4,9,12,17,19,24,26],anoth:11,another_kei:22,api:[5,8,12,13,26,27,28,32,33,34],app:11,append_vari:20,appli:[5,26],applianc:13,appropri:[2,11,12],apt:13,ar:[1,2,4,5,6,8,9,11,12,13,15,24,25,26,27,28,30,32],arriv:5,articl:7,ask:[0,1,2,8,16,18,30],askforinput:30,aspx:7,assert:[17,30,32,33,34],asset:[2,8,11,12],assist:7,associ:26,assum:[2,27],attack:5,attribut:[0,1,8,9,17,19,22],auth:16,authent:[0,1,2,4,6,8,11,12,15,16,17,18],authentication_cach:5,authentication_complet:11,authentication_failur:6,authentication_password:[8,11,12],authentication_usernam:[8,11,12],author:[1,2,5,8,15],automat:[2,5,11,30],avail:[2,4,5,7,8,11,12,18],avoid:[0,1,26],b:33,backend_service_error:6,backward:[4,8],bar:26,base:[0,1,5,7,8,9,12,15,16,19],base_url:22,basi:26,basic:[0,1,9,13,17],becaus:13,been:13,befor:[2,5,17],begin:[13,27],being:[4,5,12,17],bellow:[5,12,32],benefici:30,benefit:30,besid:5,between:[2,4,5,11,16,17,26,30],bigger:5,bin:[5,6,12,16],binari:24,black:6,blacklist:29,bodi:22,bool:[6,11,16,29],both:[8,11,26],box:[32,33,34],box_configur:17,boxconfigur:8,branded_nam:16,bugfix:13,build:[0,8,13],built:[8,27],bundl:8,busi:7,bypass:5,ca:[8,27,28],ca_cert:28,cach:[0,1,8,26],cached_valu:26,calcul:[0,1,2,4,8,11,12,17],calculate_answ:17,call:[2,5,6,7,11,12,16,17,22,28],call_external_api:6,callback:2,can:[1,2,3,5,7,8,10,11,12,13,16,17,18,19,24,25,26,28,30],candid:11,cannot:[4,21,24,27,29],capabl:16,cassett:[18,30],cert:27,certain:[5,27],certif:[8,27,28,32],cfg:8,chain:[8,18,28],challeng:[2,5,7],chang:[0,13,30],changelog:0,chat:7,check:[0,2,11,12,16,18,19,24,27,28],check_us:[29,34],checkout:12,checkout_id:12,choic:18,chosen:26,cl:16,classmethod:[6,16,21,23,24,26,29],client:[0,4,5,8,28],client_cert:28,client_hostnam:[2,4,8],client_ip:[2,4,8],client_port:[2,4],close:[2,11],cloud:7,cn:33,code:[2,5,12,13,16,17,22,30],collect:[2,11],colon:26,color1:27,color2:27,color:27,column:6,com:[7,13],come:16,command:[13,18,30],common:[0,1,2,5,8,9,11,16,17,22,26],commun:[5,6,7,16,18,30],communication_error:6,compani:7,compat:[4,8],complet:28,complex:7,compon:13,config:[3,8,10,18,27],config_valu:[5,12],configpars:27,configur:[0,1,2,5,8,9,11,12,16,17,19,23,27],configuration_sect:[11,12],conflict:26,connect:[0,1,2,5,6,8,11,12],connection_info:4,connection_nam:[2,4],connectioninfo:4,consist:[8,18],constructor:[0,1,2,9,11,17,21,23,24,26,29],consult:[2,5,12],consum:7,contact:[0,5],contain:[4,5,8,11,13,16,17,22,24,25,26,27,29],content:[2,5,11,17,30],contract:7,control:[4,7],convert:[24,27],cooki:[0,1,2,6,11,17],cookie_properti:[0,2,5,12],correct:[5,12],correspond:[4,29],costli:[0,1],could:[8,11,16],cours:30,creat:[2,5,6,8,11,12,13,15,16,18,21,23,24,26,29],creation:18,credenti:[0,3,4,8,10,11,12,15,21,27,28,32],credential_stor:[21,32],credential_store_except:21,credentialstor:[0,19,30,31],credentialstore_plugin:11,credentialstoreplugin:[0,8,9,12],credstor:[6,32],credstore_nam:21,critic:25,cs:32,current:[2,6,11,18],custom:[2,5,7,8,12,15],cycl:26,d:13,dai:[7,26],data:[0,1,2,8,11,12,17,18,19,21,22,24,26,30,31],data_path:22,databas:[6,21,24,32,33,34],dbuser:33,debug:[5,12,25],decai:26,decod:[22,26],decor:[1,5,9,17,30],decrypt:[21,32],decryptor:21,def:[2,5,6,12,16,17,21,24,25,26,28,29,30,32,33,34],defin:[0,1,2,8,9,11,17,22,24,29,32,33,34],definit:17,delai:17,delet:26,delimit:22,deni:[2,5,6,8,16],deny_reason:6,denyreason:6,depend:[8,16],deprec:[4,8],deriv:[2,11],describ:[5,12,19,30],descript:[5,12,24,33],design:[8,13,27],desir:[17,25],detail:[2,5,12,18,20,33],detect:[4,5,24,30],determin:[5,12],determinist:30,dev:13,develop:[0,8,13,15,18,19],devic:26,dict:[2,5,6,11,16,17,20,22,27],dictionari:[4,5,17,20,22,24,32,33,34],differ:[5,11,17,24],directli:[2,5,8,17,20,26,30],directori:[5,12,13,18,30],disabl:[17,28],disable_echo:[6,16],discret:5,discuss:7,disk:26,dispatch:16,displai:[6,24],dist:[8,13,18],distribut:[8,18],dn:[8,23],dn_check:8,dns_lookup:8,do_authent:[2,5,16,17],do_authentication_complet:[11,12],do_author:[2,5,17],do_check_in_credenti:[11,12],do_get_password_list:[11,12],do_get_private_key_list:[11,12],do_get_remote_app_credenti:[8,11],do_session_end:[2,5,11,12],do_some_log:25,document:[2,5,7,12,15,21,30],doe:[2,4,5,8,11,12,20,22,26,32],doesn:8,domain:[4,8,11,23],domain_asset_map:11,don:[2,18,30],done:[2,30],dot:22,download:7,dsa:11,dss:11,due:[5,16],dure:18,e:[2,6,11,26],each:[6,28],eas:30,easi:[4,17],echo:6,effect:5,eg:22,either:[2,11,17,30],elif:6,elimin:7,els:[5,6],emit:8,empti:[2,4,5,6,11,24,27],enabl:[1,7,9,15,17,28],encod:[24,26,32],encourag:30,encrypt:[27,28],end:[0,1,6,8,11,27],endpoint:[8,22],endpoint_extractor:22,endpoint_url:22,endpointexcept:22,endpointextractor:[0,8,19],engag:7,engin:7,enhanc:[5,7,8,12],enough:[1,5],ensur:[11,17],enter:[28,30],entir:2,entri:26,env:[5,6,12,16],environ:[0,5,7,12,17,18,19,30],environment:5,equal:[2,4,29],error:[6,8,16,23,24,25],especi:24,etc:[2,5,8,12],evalu:17,evaul:17,even:[8,11,19,20],eventu:[5,12],everi:[17,18,30],evict:26,exampl:[0,2,4,5,8,12,13,16,19,27,30,31],exce:8,except:[0,5,6,11,12,16,19,22,34],excpet:27,execut:[2,5,11,13,16,18],execute_authent:16,exist:[8,26],expect:[5,12],expir:26,explicit:2,extend:6,extens:18,extern:[5,26,30],extra:5,extract:[8,22],extract_data_from_endpoint:22,f10:14,f11:14,f1:14,f2:14,f3:14,f4:14,f5:14,f6:14,f7:14,f9:14,factor:[1,2,5,8,16,26],factori:[11,17],fail:[8,11],failur:[6,16],fake:[0,19,30,32],fals:[6,16,27,29,34],fast:30,faster:30,fetch:[8,11,12,24],field:[4,6,13],file:[5,8,12,13,18,22,28,30],filter_user_group:[24,33],find:[5,12,13],finish:2,first:[2,8,11,18,26,32],fix:[8,13],fixtur:30,flag:18,fly:5,folder:30,follow:[2,3,5,8,10,11,12,13,16,18,24,25,29,30],foo:[26,27],foobar:[17,27],forc:5,format:[20,27,28],forward:25,found:[11,21,24,29],frame:5,free:20,frequent:[1,9,26],from:[0,2,3,5,6,8,10,11,12,16,17,18,21,22,24,25,26,27,28,29,30,32,33,34],from_config:[16,21,23,24,26,28,29,32,33,34],full:[22,26],fulli:23,further:[2,16,18],g:[2,6,11],gap:5,gatewai:[0,1,2,4,6,8,11,16,18],gateway_domain:[2,4],gateway_group:[2,4,6],gateway_password:4,gateway_us:[2,4,5,6],gateway_usernam:4,gatewayus:18,gener:[8,11,19],get:[0,5,8,12,16,18,19,22,24,27,30],get_al:21,get_ca_certif:[8,27],get_certif:[21,27],get_credenti:21,get_kei:[21,27],get_logg:25,get_opt:27,get_password:[21,32],get_password_list:11,get_private_key_list:11,get_user_attribut:24,get_user_string_attribut:[8,24,33],getboolean:[16,27],getfloat:27,getienum:27,getint:27,getlist:27,github:13,give:[4,12],given:[2,6,11,21,23,24,25,27,29],global:26,glue:16,good:16,govern:7,green:27,group:[0,1,4,6,24,33],gu:8,guid:[5,12,15,30],gwuser:8,ha:[2,8,13,30,32],had:[18,30],half:26,hand:[24,30],handl:[8,16,26,30],hard_timeout:5,have:[2,4,7,8,17,26,27,30],header:22,heavi:17,help:[7,15],helper:[1,9],here:[2,4,5],histori:0,hold:6,hook:[2,4,8,11,17,28],host:[21,23,32],host_resolv:23,hostnam:[4,11,17],hostresolv:[0,19],hour:7,housekeep:2,how:[7,30],howev:30,http:[3,6,7,8,10,13,16,17,22,28,30],httpbin:[28,30],httperror:6,https_proxi:[8,17],https_proxy_en:17,https_proxy_password:17,https_proxy_port:17,https_proxy_serv:17,https_proxy_usernam:17,human:[6,16],hybrid:7,i:26,iam:7,id:12,ident:[1,2,5,7,15,16],identifi:[4,6,11,12,27,28],ignore_connection_error:16,imaginari:16,implement:[1,2,5,9,11,12,15,16,19,21,24,26,27,29],inband:4,includ:[2,4,8,18],incompat:30,indefinit:26,indent:[27,28],indentet:27,indentifi:11,independ:7,index:[0,5],index_of_transform_usernam:5,indic:[2,5,6,16,32],info:[2,5,25],inform:[0,1,5,8,12,21,32],inher:5,inherit:[2,11,12],ini:18,initi:[2,8,11,17,26],inject:[0,8,30,31],input:[2,6,11,18,24,30],inquiri:7,insert:[5,28],insid:[5,13,32],instal:[5,12,13,30],instanc:[2,5,11,13,16,17,21,23,24,27,29],instanti:[8,11,16,21,23,24,26,28,29],instead:[8,11,26],integ:27,integr:[0,1],interact:[2,8,18,30],interfac:34,intern:24,interpret:13,introduc:[2,8],introduct:0,invalid:27,invalidusageexcept:11,invoc:[2,5,11,17],invok:[2,18,19,22],invoke_http_method:22,involv:18,ip:[4,5,8,11,17,23],ip_address:23,is_match:29,is_on_blacklist:6,is_on_whitelist:6,issu:[8,16],item:5,its:[2,4,6,11,16,17,18,21,23,24,26,29,30],itself:[4,33,34],jpeg:24,json:[6,22,26],just:12,keep:[5,12],kei:[2,4,6,8,11,17,20,21,22,26,27,28,32,33,34],kept:11,key_value_pair:[2,4,5,6],keyboard:[18,30],kind:[17,32],kit:15,know:4,knowledg:7,known:4,last:[2,5],last_kei:22,later:[2,11,12,30],latest:[0,13],lazi:17,lazy_properti:0,ldap:[8,24,33],ldap_serv:[2,24,33],ldap_server_except:24,ldap_servic:24,ldapoperationerror:24,ldapserv:[0,19,30,31],ldapservic:8,ldapusernotfound:24,least:[2,13,26],legaci:8,len:5,let:8,level:[2,11,17,25],lfu:26,lib:5,libffi:13,libldap2:13,librari:[8,30],libsasl2:13,libssl:13,lightblu:27,lightgreen:27,like:[2,11,12,16,20,22,33,34],limit:[5,26],line:[13,27,28],list:[0,2,5,6,11,12,18,19,21,22,23,24,27,28,32,34],literalinclud:2,live:26,ll:[24,29],local:[8,21,29,32],localcredentialstorenotfound:21,localuserlistnotfound:29,log:[0,2,5,11,12,17,19,26],log_level:25,logger:[0,2,5,11,12,17,19],logic:[11,12],login:5,lower:27,ls:33,lt:14,magic:5,mai:[2,4,5,11,12,16,24,26,27,30],main:[13,18],mainten:7,major:13,make:[2,8,11,28],manag:7,mani:4,manifest:[5,8,12,13,18],map:[2,8,24,32],mark:[2,17,30],match:[0,2,5,8,19],maximum:5,mean:[4,5,8,26,28,30],meant:[4,17],member:[21,24],membership:29,memori:26,memory_cach:26,memorycach:[0,8,19],messag:[2,5,6,12,20,22,24,27],meta:[0,1,6],metadata:[6,8],meth:2,method:[0,1,5,6,8,9,12,16,17,21,22,23,24,25,26,27,29,30],mfa:[0,2,5],mfa_client:16,mfa_ident:[2,5,16],mfa_password:[2,5,16],mfaauthenticationfailur:16,mfaclient:[1,6,8,16],mfacommunicationerror:16,mfaserviceunreach:16,microsoft:24,might:5,minor:13,mismatch:16,miss:[24,26,27],mock:30,mode:[4,34],modifi:[2,5,6],modul:[0,16,27,30],monkeypatch:[0,30,31],more:[2,5,11,12,17,20,21,26,32,33],ms:[2,8],much:30,multi:[1,2,5,16],multipl:[8,24],multivalu:33,must:[2,13,22,27,28],my:5,my_ad_polici:24,my_custom_kei:17,my_user_list_polici:29,mydomain:8,myplugin:[5,17],mypluginconfigsect:12,mystep:5,name:[0,2,4,5,8,11,12,17,18,19,21,23,24,25,26,27,28,30,32,33,34],named_cookie_properti:0,necessari:[5,13,17,18],need:[2,4,5,12,16,22,30],need_foobar:17,need_info:[2,5,6,11,16],needinfo:[2,6,8],network:16,never:26,next:[5,6,12,13,18,27],no_us:[29,34],non:[2,8,22],none:[2,4,6,8,11,12,16,17,20,21,22,24,25,26,27,29],nonetyp:25,note:[2,4,5,11,12,24,26,28,29,30,32],notic:30,notif:[2,5,7,16],now:[8,13,16],number:[4,5,17,18],numer:[24,33],object:[0,5,8,12,19,20,21,22,23,24,25,26,29],off:[5,6],offic:24,offici:30,offlin:30,often:7,ok:[22,27,30],older:13,onc:11,one:[4,5,8,12,16,22,25,26,27,28],oneident:[7,13,26],ones:[2,11],onli:[2,4,5,11,12,13,17,18,27],onlin:7,open_sess:28,oper:[26,27],option:[0,1,5,8,9,12,16,18,24,25,27,28,29],order:5,org:[8,28,30],origin:[5,12],os:8,other:[2,5,6,7,11,12,17,24,26,27,28],other_us:34,otherwis:[2,4,5,8,12,26,29],otp:[2,16],otp_authent:16,our:7,out:[5,11,12,13,30],outcom:16,outdat:8,outlin:16,outsid:[2,8,11,19,32,33,34],over:16,overhead:8,overload:[5,12],overrid:6,overridden:[2,3,8,10],overwrit:[5,6,20,26,32,33,34],overwritten:2,own:[16,32,33,34],packag:[5,8,12,13,18],page:0,pair:[4,11,21,27,28],param:22,paramet:[2,4,5,6,8,11,12,16,18,20,21,22,23,24,25,26,27,28,29],pars:[4,17,27],part:[2,15],parti:6,pass:[2,4,5,6,11,17],password:[1,2,3,4,5,6,8,10,11,12,16,17,21,30,32],patch:[32,33,34],path:22,pattern:26,pc:[32,33,34],pem:[27,28],peopl:26,per:26,perform:4,persist:[8,26],person:26,photo:24,physicaldeliveryofficenam:24,pip:[5,12,18],pipenv:[13,18,30],pipfil:[5,8,12,13],place:[6,18],pleas:[5,30],plu:18,plugin:[2,3,4,8,10,11,14,15,16,18,20,21,22,23,24,25,26,27,28,29,30,32,33,34],plugin_bas:[2,11,12,17],plugin_configur:[5,12,16,17,21,23,24,26,27,28,29,32],plugin_configuration_except:27,plugin_impl:[32,33,34],plugin_respons:[2,6],pluginbas:[0,2,5,11,12,28],pluginconfig:[25,32,33,34],pluginconfigur:[0,8,17,19,21,23,24,25,26,29,32,33,34],pluginsdkexceptionformatt:20,pluginsdkruntimeerror:[20,22],pluginsdkruntimewarn:20,pluginsdkvalueerror:[20,25,27],pluginv:[0,8,13,30],pluginwrapper3:[5,6,12,16],point:[13,27],polici:[4,21,24,26,29,32,33,34],popul:19,port:[4,17],portal:7,possess:[1,9],possibl:[4,5,8,11,23,25,27],post:22,practic:16,pre:[0,1,9,18,30],preced:2,precis:17,preconfigur:[8,24],predefin:24,prefer:13,prefix:[8,22,26],premis:7,prepar:0,prepend:22,prescrib:2,present:[2,4,5,13,17,27,32],previou:[0,5,6,13,20,26],previous:[11,30],primari:23,print:[8,17],privat:[8,11,27,32],private_kei:[11,27],privileg:[5,7,12,13,14,15,19,25],problem:7,process:[2,4,5,7,8,11,12],product:[7,15,19,26],project:30,prompt:6,propag:16,properti:[2,4,6,17],protect:32,protocol:[2,4,5,8,12,16],provid:[1,2,5,6,7,8,9,11,15,16,17,18,20,22,28,30],proxi:[3,8,10,17],proxy_set:17,purpos:8,push:[2,5,16],push_authent:16,put:[11,30],py:[2,5,13],pyobject:2,pypi:8,pytest:[0,30,31],python2:8,python3:[5,12],python:[0,1,5,8,9,12,15,17,19,20,25,26,27],python_vers:13,qualifi:23,queri:22,question:[2,5,6,8],quickli:[5,7],rais:[21,22,23,24,25,27,29],rapid:[1,9,15],rather:[21,23,24,29],raw:[5,12],rdp:[4,8],rdpwithgatewayauth:18,re:[5,30],reach:16,read:[2,4,5,11,12,21,26],readabl:[6,16],readi:13,real:[18,30],reason:[5,6,8],receiv:[2,13],recommend:30,record:[4,5,8,12,18,30],redi:[8,26],redo:5,reduc:24,refer:[18,24,30],reflect:8,regard:11,regularli:30,relat:[2,5,11,24],releas:[0,8],relev:17,remot:11,remote_app_account:11,remote_app_asset:11,remoteapp:[8,11],remoteappinfo:11,remov:8,replai:[18,30],repli:[2,5],repons:5,repres:[4,6,12,21,22,23,24,26,27,29],represent:[5,12],request:[0,7,8,16,19,22,27,30],requests_tl:28,requeststl:[8,22,28],requir:[5,7,13,15,27],requiredconfigurationsettingnotfound:[21,24,27,29],resolv:[4,8,23],resolve_hosts_by_ip:23,resourc:0,respect:[28,33],respond:22,respons:[0,1,2,8,22,30],rest:[8,16,26],restart:26,result:[2,5,13,24],retain:[2,5,11,17],retriev:[17,21,22,24,27,28],reus:5,reuse_limit:5,reveal:4,revis:8,right:[2,28],root:[25,33],rootcert:27,rootlogg:25,rotat:12,rsa:[11,27,32],run:[0,8,11,13,26,30],runtim:[8,27],runtimeerror:20,s:[5,6,8,12,15,16,22,24,27],safeguard:[2,4,5,6,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,32,33,34],sale:7,same:[2,5,8,11,13,17,20],save:17,scenario:[0,8],scratch:0,script:[8,18],sdk:[5,8,12,13,14,15,18,20],search:[0,27],second:[5,26],secret:[11,27,30],section:[2,5,8,11,12,13,16,17,18,19,21,24,26,27,28,29],secur:21,see:[2,4,5,12,13,17,18,32,33],self:[0,1,2,6,7,8,9,11,16,17,20,21,22,24,25,26,28,29],selftest:8,send:[2,8,22,30],sensit:[21,29],sent:22,separ:[4,26,27],seq:[6,27],sequenc:32,server:[4,6,8,11,16,18,24,28,33],server_:8,server_domain:[2,4],server_hostnam:[2,4,8],server_ip:[2,4,8],server_port:[2,4],server_url:16,server_usernam:[2,4],servic:[0,1,5,6,7,8,15,16,18,21,23,24,26,27,28,29,30],session:[2,4,5,6,8,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,29,32,33,34],session_cooki:[2,5,6,11,17],session_cookie_properti:0,session_end:[2,11],session_id:[2,4,5,11,12],set:[0,1,2,4,6,8,11,12,16,17,18,19,25,27,28,29],setitem:[32,33,34],setup:[5,12],sever:18,shall:[4,5],shell:18,should:[1,2,5,9,11,12,13,16,17,18,24,26,27],show:[5,12,16,30],shown:[6,28],side:[16,28],sign:[7,8],similar:[2,11,17],similarli:17,simpl:[1,5,16,30,32],simpli:[12,17],simplic:5,simplifi:[1,9],sinc:26,skeleton:[0,5],slow:30,snapshot:[0,13],so:[2,11,30],socket:23,soft_timeout:5,softwar:[7,15],solut:7,solv:7,some:[2,5,12,27],somekei:5,someth:[5,12],somevalu:5,sophist:5,sourc:[2,13],sp:[2,4,5,8,11,12,13,16,18,21,24,26,28,29,30,32,33,34],specif:[4,19,25,26],specifi:[2,4,17,18,22,26],spoof:5,sql:[2,8],src:2,ssh:[2,4,8,11,21,32],standard:[25,28],stare:8,starl:26,start:[0,5,12,18,30],state:15,statu:22,step:[0,1,2,11,12,13,18],steps_nam:5,store:[0,2,3,4,5,6,8,10,11,12,15,17,21,24,26,27,28,32],str:[2,6,11,16,20,21,22,23,24,25,26,27,29,30],strictli:8,string:[2,4,5,12,22,24,26,27,32],subclass:[20,22],subcommand:[18,30],submit:7,subsequ:2,success:[1,2,6,11,16],successfulli:[5,11],suffix:8,suitabl:26,suppli:12,support:[0,8,13,16,28],system:[2,5,8,12,13,17,25],t:[2,8,18,30],take:2,target:[2,4,5,8,11,18],target_:8,target_domain:4,target_host:[4,8],target_ip:[4,8],target_port:4,target_serv:[4,8],target_usernam:4,task:[0,1,2,8,9,18],technic:[0,2,5,12,15],telnet:4,termin:4,test:[0,8,13,19,32,33,34],test_:30,test_credential_stor:32,test_interactive_input:30,test_user_list:[33,34],test_vcr_exampl:30,testdb:[32,33,34],text:20,textual:27,than:5,thei:11,thekei:32,them:[5,12,18,30],thi:[2,4,5,6,8,11,12,13,16,17,18,19,22,24,25,26,28,29,30,32],thing:5,think:5,those:24,through:8,thu:5,ticket:2,time:[5,7,8,12,16,18,26,27,30],timeouterror:6,tl:[0,8,19],togeth:[1,13,17],token:[16,26],tool:[7,13,18,30],top:[2,5,11,12],topsecret:11,toward:16,transform:2,translat:5,trial:7,trigger:24,trust:[27,28],ttl:26,tupl:[21,22],turn:[5,6,12],two:[8,26,29],type:[6,8,16,21,23,24,25,26,27,32],typic:26,ubuntu:13,ul:34,under:11,unfilt:21,uniqu:[4,26],unit:0,unix:24,unless:[2,8],unsaf:5,until:[11,17],up:[2,5,7,8,11,12,17,18,26,30],updat:[2,5,8,12],upgrad:8,upload:[5,12,13],upper:27,url:[16,22],urllib:30,us:[0,1,2,4,6,8,11,12,16,17,18,19,20,21,22,23,24,26,28,29,30],usabl:13,usag:[0,17,19,26,30,31],user1:34,user:[0,1,2,4,6,8,11,12,16,18,19,21,22,26,32,33,34],user_attribut:24,user_attribute_factori:24,user_group:24,user_groups_factori:24,user_list:[29,34],user_list_except:29,user_list_nam:29,user_whitelist:34,userlist:[0,19,30,31],usermap:2,usernam:[2,4,5,6,8,11,12,16,17,18,24,29],username_transform:2,usr:[5,6,12,16],usual:[6,11,30],utf:24,util:[8,22,23],v:18,valid:[5,7],valu:[0,2,4,5,6,8,11,12,16,17,19,24,27,28,29,32,33,34],value_set:27,variabl:[11,17,20,22,24,27],variant:27,variou:19,vcr:30,vcrpy:30,vendor:26,verbos:25,verdict:[2,5,8,16],verif:28,verifi:2,version:[0,3,4,5,6,7,9,10,11,12,13,16,24,27,28],via:[8,17,26],video:7,view:[2,7,11],virtual:[13,18],virtualenv:18,visibl:[2,8,11,17],visit:7,vs:8,wa:[2,11,16,17,30],wai:[0,1,5,9,13,17,24,30],want:[13,17,18,30],warn:[8,25],we:[2,24,29,30],web:34,well:[8,16,19,32],what:[5,12,13],when:[2,5,8,11,17,18,21,22,24,26,27,28,29,32,33,34],where:[1,2,5,8,12,21,22,24,26,29,32,33,34],whether:[0,16,19,24,27],which:[2,4,5,8,11,12,13,17,18,22,24,26,27,30],whitelist:29,whitespac:[27,28],who:[6,7],wide:17,window:24,with_additional_metadata:[5,6],with_cooki:[2,5,6],with_gateway_us:[5,6],with_reason:6,with_session_cooki:[2,6],without:[20,26,30],won:30,word:[5,27],work:[0,1,9,13,17,26],would:[8,12],write:[5,12,13,26,30],written:18,wrote:18,wsmith:33,www:7,x509:[21,32],x:33,y:33,yaml:30,ye:[16,27,28],year:7,yet:11,yield:2,you:[6,7,12,13,17,18,30],your:[5,7,12,13,18,30,32,33,34],youtub:7,zip:[5,8,12,13,18],zipfil:8},titles:["Welcome to Safeguard for Privileged Sessions Plugin SDK\u2019s documentation!","<span class=\"section-number\">6. </span>AA plugin development","<span class=\"section-number\">6.5. </span>AAPlugin","<span class=\"section-number\">6.1. </span>Common configuration options","<span class=\"section-number\">6.4. </span>Connection information","<span class=\"section-number\">6.2. </span>Plugin development","<span class=\"section-number\">6.3. </span>Plugin response","<span class=\"section-number\">12. </span>About us","<span class=\"section-number\">2. </span>Changelog","<span class=\"section-number\">8. </span>Credential Store plugin development","<span class=\"section-number\">8.1. </span>Common configuration options","<span class=\"section-number\">8.3. </span>CredentialStorePlugin","<span class=\"section-number\">8.2. </span>Plugin development","<span class=\"section-number\">4. </span>Getting started","<span class=\"section-number\">1. </span>History of releases","<span class=\"section-number\">3. </span>Introduction","<span class=\"section-number\">7. </span>MFA Client","<span class=\"section-number\">11. </span>Plugin base functions","<span class=\"section-number\">5. </span>pluginv","<span class=\"section-number\">9. </span>Plugin SDK services","<span class=\"section-number\">9.7. </span>Base class for exceptions","<span class=\"section-number\">9.3. </span>CredentialStore","<span class=\"section-number\">9.10. </span>EndpointExtractor","<span class=\"section-number\">9.6. </span>HostResolver","<span class=\"section-number\">9.4. </span>LDAPServer","<span class=\"section-number\">9.2. </span>Logging","<span class=\"section-number\">9.9. </span>MemoryCache","<span class=\"section-number\">9.1. </span>PluginConfiguration","<span class=\"section-number\">9.8. </span>Requests TLS Session","<span class=\"section-number\">9.5. </span>UserList","<span class=\"section-number\">10. </span>Testing","<span class=\"section-number\">10.1.1. </span>Fake services for testing","<span class=\"section-number\">10.1.1.1. </span>CredentialStore data injection","<span class=\"section-number\">10.1.1.2. </span>LDAPServer data injection","<span class=\"section-number\">10.1.1.3. </span>UserList data injection"],titleterms:{"0":8,"1":8,"2":8,"3":8,"4":8,"5":8,"6":8,"7":8,"class":20,"function":[5,12,17],aa:1,aaplugin:2,about:7,acquir:[21,24,25],ad:[5,12],addit:5,administr:[5,12],alter:5,ask:5,attribut:[2,5,11,12,24],authent:5,avoid:5,base:[17,20],basic:[5,12],build:18,cach:5,calcul:5,chang:8,changelog:8,check:29,client:16,common:[3,10],configur:[3,10,21,24,25,26,28,29],connect:4,constructor:[5,12],contact:7,cooki:5,cookie_properti:17,costli:5,credenti:9,credentialstor:[21,32],credentialstoreplugin:11,data:[5,32,33,34],defin:[5,12],develop:[1,5,9,12],document:0,end:5,endpointextractor:22,environ:13,exampl:[21,24,25,26,28,29,32,33,34],except:[20,21,24,27,29],fake:31,from:13,gatewai:5,get:[13,26,28],group:5,histori:14,hostresolv:23,indic:0,inform:[4,18],inject:[32,33,34],integr:[18,30],introduct:15,latest:14,lazy_properti:17,ldapserv:[24,33],list:29,log:25,logger:25,match:29,memorycach:26,meta:5,method:[2,11],mfa:16,monkeypatch:[32,33,34],name:29,named_cookie_properti:17,object:28,option:[3,10],plugin:[0,1,5,6,9,12,13,17,19],pluginbas:17,pluginconfigur:27,pluginv:18,pre:[5,12],prepar:13,previou:14,privileg:0,pytest:[32,33,34],python:13,releas:[14,18],request:28,resourc:7,respons:6,run:18,s:0,safeguard:0,scenario:18,scratch:13,sdk:[0,19],self:[5,12],servic:[19,25,31],session:[0,28],session_cookie_properti:17,set:[5,26],skeleton:13,snapshot:18,start:13,step:5,store:9,support:7,tabl:0,task:[5,12],technic:7,test:[18,30,31],tl:28,unit:[18,30],us:[5,7,13],usag:[25,32,33,34],user:[5,24,29],userlist:[29,34],valu:26,version:[8,18],wai:[2,11],welcom:0,whether:29,work:[2,11]}})