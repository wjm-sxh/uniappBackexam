# 项目介绍
## 描述
这是在线考试项目的后台

## 环境
+ nodejs 20.17.0
+ npm    10.8.0
+ mysql  5.7.26
+ 服务器地址: 
- >> http://127.0.0.1:4000
- >> http://localhost:4000

## 接口说明
## 考试模块

### 成绩管理
1. 新增成绩
- 地址：/api/exam/exam_score_add
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：nickName,account,name,score,wrong,right,myanswer,time
- 示例：http://127.0.0.1:4000/api/exam/exam_score_add
- 响应数据格式: json格式

2. 获取成绩列表
- 地址：/api/exam/exam_score_list
- 请求：GET (可以在浏览器地址栏测试)
- 参数：token
- 示例：http://127.0.0.1:4000/api/exam/exam_score_list
- 响应数据格式: json格式

3. 删除成绩
- 地址：/api/exam/exam_score_remove
- 请求：GET (可以在浏览器地址栏测试)
- 参数：id
- 示例：http://127.0.0.1:4000/api/exam/exam_score_remove
- 响应数据格式: json格式

4. 获取成绩详情页
- 地址：/api/exam/exam_score_detail
- 请求：GET (可以在浏览器地址栏测试)
- 参数：无
- 示例：http://127.0.0.1:4000/api/exam/exam_score_detail
- 响应数据格式: json格式

### 考试分类名称  
1. *** 添加考试分类名称 *** 
- 地址：/api/exam/category_add
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：text , icon
- 示例：http://127.0.0.1:4000/api/exam/category_add
- 响应数据格式: json格式


2.  ***获取考试分类列表 ***
- 地址：/api/exam/category_list
- 请求：GET (可以在浏览器地址栏测试)
- 参数：无
- 示例：http://127.0.0.1:4000/api/exam/category_list
- 响应数据格式: json格式


3.  ***删除考试分类名称 ***
- 地址：/api/exam/category_remove
- 请求：GET (可以在浏览器地址栏测试)
- 参数：id
- 示例：http://127.0.0.1:4000/api/exam/category_remove
- 响应数据格式: json格式


4.  ***修改考试分类名称 ***
- 地址：/api/exam/category_modify
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：id text 
- 示例：http://127.0.0.1:4000/api/exam/category_modify
- 响应数据格式: json格式


### 试卷列表
1. 新增试卷
- 地址：/api/exam/exam_add
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：id, text, name, total, passline, time,num,score
- 示例：http://127.0.0.1:4000/api/exam/exam_add
- 响应数据格式: json格式

2. 获取试卷列表
- 地址：/api/exam/exam_list_all
- 请求：GET (可以在浏览器地址栏测试)
- 参数：无
- 示例：http://127.0.0.1:4000/api/exam/exam_list_all
- 响应数据格式: json格式

3. 获取试卷列表（分页）
- 地址：/api/exam/exam_items
- 请求：GET (可以在浏览器地址栏测试)
- 参数：page, pageSize
- 示例：http://127.0.0.1:4000/api/exam/exam_items
- 响应数据格式: json格式

4. 删除试卷
- 地址：/api/exam/exam_remove
- 请求：GET (可以在浏览器地址栏测试)
- 参数：eid
- 示例：http://127.0.0.1:4000/api/exam/exam_remove
- 响应数据格式: json格式


5. 统计各分类试卷数量
- 地址：http://127.0.0.1:4000/api/exam/exam_category_total
- 请求：GET (可以在浏览器地址栏测试)
- 参数：无
- 示例：http://127.0.0.1:4000/api/exam/exam_category_total
- 响应数据格式: json格式


6. 搜索试卷列表
- 地址：http://127.0.0.1:4000/api/exam/exam_search
- 请求：GET (可以在浏览器地址栏测试)
- 参数：keyword
- 示例：http://127.0.0.1:4000/api/exam/exam_search
- 响应数据格式: json格式

7. 获取试卷详情
- 地址：http://127.0.0.1:4000/api/exam/exam_detail
- 请求：GET (可以在浏览器地址栏测试)
- 参数：eid
- 示例：http://127.0.0.1:4000/api/exam/exam_detail
- 响应数据格式: json格式

8. 获取试卷列表（根据主分类id获取响相应的试卷）
- 地址：http://127.0.0.1:4000/api/exam/exam_list
- 请求：GET (可以在浏览器地址栏测试)
- 参数：id
- 示例：http://127.0.0.1:4000/api/exam/exam_list
- 响应数据格式: json格式

### 考试题目管理接口
1. 新增试卷题目
- 地址：/api/exam/topic_add
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：eid, name, question, answer, score, option
- 示例：http://127.0.0.1:4000/api/exam/topic_add
- 响应数据格式: json格式

2. 获取试卷对应的题目列表
- 地址：/api/exam/topic_list
- 请求：GET (可以在浏览器地址栏测试)
- 参数：eid
- 示例：http://127.0.0.1:4000/api/exam/topic_list
- 响应数据格式: json格式

3. 删除题目
- 地址：/api/exam/topic_remove
- 请求：GET (可以在浏览器地址栏测试)
- 参数：tid
- 示例：http://127.0.0.1:4000/api/exam/topic_remove
- 响应数据格式: json格式

4. 统计指定试卷的题目数量
- 地址 /api/exam/topic_num
- 请求：GET (可以在浏览器地址栏测试)
- 参数：eid
- 示例：http://127.0.0.1:4000/api/exam/topic_num
- 响应数据格式: json格式

5. 获取题目列表（分页）
- 地址：/api/exam/topic_items
- 请求：GET (可以在浏览器地址栏测试)
- 参数：page, pageSize
- 示例：http://127.0.0.1:4000/api/exam/topic_items
- 响应数据格式: json格式


### 邮件验证码
1. 发送邮件
- 地址：/api/email/send
- 方式：GET
- 参数： email
- 响应式数据格式: json格式
- 示例地址： http://localhost:4000/api/email/send?email=3212214220@qq.com

2. 校验邮件验证码 (辨别是否为真实用户)
- 地址：/api/email/verify
- 方式：GET
- 参数： email , vcode
- 响应式数据格式: json格式
- 示例地址： http://localhost:4000/api/email/verify?email=3212214220@qq.com&vcode=088431


### 用户模块
1. 注册接口
- 地址： /api/user/register
- 方式： POST
- 参数： nickName, account, password, email
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/register


2. 登录接口
- 地址： /api/user/login
- 方式： POST
- 参数： account, password
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/login

3. 找回密码或设置用户密码接口
- 地址： /api/user/pwd
- 方式： POST
- 参数： account, password
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/pwd


4. 用户管理（删除）
- 删除账号接口
- 地址： /api/user/remove
- 方式： POST
- 参数： token
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/remove

5. 设置用户头像接口
- 地址： /api/user/img
- 方式： POST
- 参数： token, imgUrl
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/img


6. 编辑用户信息接口
- 地址： /api/user/edit
- 方式： POST
- 参数： token, age,sex,address,phone
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/edit


6. 获取用户信息接口
- 地址： /api/user/info
- 方式： POST
- 参数： token
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/info

7. 获取用户列表接口
- 地址： /api/user/list
- 方式： GET
- 参数： page, pageSize
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/list


8. 登录接口(管理员)
- 地址： /api/user/signin
- 方式： POST
- 参数： account, password,role
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/signin


9. 获取验证码 (图片验证码)
- 地址: /api/verify/captcha
- 方式：GET
- 参数： 无
- 响应数据：svg格式
- 示例：http://localhost:4000/api/verify/captcha


10. 获取用户列表接口
- 地址： /api/user/search
- 方式： GET
- 参数： keyword
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/search

10. 判断用户是否登录在线
- 地址： /api/user/logged
- 方式： POST
- 参数： token
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/logged

11. 关键字搜索用户
- 地址： /api/user/search
- 方式： GET
- 参数： keyword
- 响应数据格式： json格式
- 示例： http://localhost:4000/api/user/search

### 图片处理
1. 上传图片
- 地址：/api/photo/upload
- 方式：POST
- 参数： photo
- 响应数据格式: json格式
- 示例： http://localhost:4000/api/photo/upload

2. 删除图片
- 地址：/api/photo/delete
- 方式：POST
- 参数：picUrl
- 响应数据格式: json格式
- 示例： http://localhost:4000/api/photo/delete




### 界面互动
1. 收藏
2. 评论

### 数据可视化
1. 饼状图
2. 柱状图
3. 折线图


## 新增
### 面试题主菜单（一级）
1. 添加面试题分类名称
- 地址：/api/interview/category_add
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：category_text,  category_icon
- 示例：http://127.0.0.1:4000/api/interview/category_add
- 响应数据格式: json格式


2. 获取面试题分类列表
- 地址：/api/interview/category_list
- 请求：GET (可以在浏览器地址栏测试)
- 参数：无
- 示例：http://127.0.0.1:4000/api/interview/category_list
- 响应数据格式: json格式


3. 删除面试题分类名称
- 地址：/api/interview/category_remove
- 请求：GET (可以在浏览器地址栏测试)
- 参数：category_id
- 示例：http://127.0.0.1:4000/api/interview/category_remove
- 响应数据格式: json格式


4. 修改面试题分类名称
- 地址：/api/interview/category_edit
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：category_id, category_text
- 示例：http://127.0.0.1:4000/api/interview/category_edit
- 响应数据格式: json格式


### 面试题子菜单（二级）
1. 添加面试题子分类名称
- 地址：/api/interview/menu_add
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：category_id, menu_name, category_text
- 示例：http://127.0.0.1:4000/api/interview/menu_add
- 响应数据格式: json格式


2. 获取面试题子分类列表
- 地址：/api/interview/menu_list
- 请求：GET (可以在浏览器地址栏测试)
- 参数：category_id (可选) 不传递参数就是获取全部
- 示例：http://127.0.0.1:4000/api/interview/menu_list
- 响应数据格式: json格式


3. 删除面试题子菜单分类名称
- 地址：/api/interview/menu_remove
- 请求：GET (可以在浏览器地址栏测试)
- 参数：menu_id
- 示例：http://127.0.0.1:4000/api/interview/menu_remove
- 响应数据格式: json格式



4. 修改面试题分类名称
- 地址：/api/interview/menu_edit
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：menu_id, menu_name
- 示例：http://127.0.0.1:4000/api/interview/menu_edit
- 响应数据格式: json格式


### 面试题
1. 添加面试题
- 地址：/api/interview/topic_add
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：category_id,menu_id,menu_name, topic_question,topic_answer,topic_img (可选)
- 示例：http://127.0.0.1:4000/api/interview/topic_add
- 响应数据格式: json格式


2. 获取面试题子分类面试题列表
- 地址：/api/interview/topic_list
- 请求：GET (可以在浏览器地址栏测试)
- 参数：menu_id
- 示例：http://127.0.0.1:4000/api/interview/topic_list
- 响应数据格式: json格式

3. 获取面试题子分类面试题列表
- 地址：/api/interview/topic_items
- 请求：GET (可以在浏览器地址栏测试)
- 参数：menu_id page page_size
- 示例：http://127.0.0.1:4000/api/interview/topic_items
- 响应数据格式: json格式


4. 删除面试题
- 地址：/api/interview/topic_remove
- 请求：GET (可以在浏览器地址栏测试)
- 参数：topic_id
- 示例：http://127.0.0.1:4000/api/interview/topic_remove
- 响应数据格式: json格式


5. 修改面试题
- 地址：/api/interview/topic_edit
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：topic_id,topic_answer
- 示例：http://127.0.0.1:4000/api/interview/topic_edit
- 响应数据格式: json格式


6. 关键字查询面试题 (搜索)
- 地址：/api/interview/topic_search
- 请求：GET (可以在浏览器地址栏测试)
- 参数：menu_id
- 示例：http://127.0.0.1:4000/api/interview/topic_search
- 响应数据格式: json格式


7. 获取面试题列表（全部）
- 地址：http://127.0.0.1:4000/api/interview/topic_list_all
- 请求：GET (可以在浏览器地址栏测试)
- 参数：无
- 示例：http://127.0.0.1:4000/api/interview/topic_list_all
- 响应数据格式: json格式


8. 获取面试题列表（热门）
- 地址：http://127.0.0.1:4000/api/interview/topic_list_hot
- 请求：GET (可以在浏览器地址栏测试)
- 参数：无
- 示例：http://127.0.0.1:4000/api/interview/topic_list_hot
- 响应数据格式: json格式

9. 查看面试题详情
- 地址：http://127.0.0.1:4000/api/interview/topic_detail
- 请求：GET (可以在浏览器地址栏测试)
- 参数：topic_id
- 示例：http://127.0.0.1:4000/api/interview/topic_detail
- 响应数据格式: json格式


10. 查看各分类面试题数量
- 地址：http://127.0.0.1:4000/api/interview/topic_category_total
- 请求：GET (可以在浏览器地址栏测试)
- 参数：无
- 示例：http://127.0.0.1:4000/api/interview/topic_category_total
- 响应数据格式: json格式

### 收藏面试题
1. 添加收藏面试题
- 地址：/api/interview/collect_add
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：category_id,menu_id, menu_name, topic_question,topic_answer,topic_img（可选）,token
- 示例：http://127.0.0.1:4000/api/interview/collect_add
- 响应数据格式: json格式


2. 获取收藏面试题列表
- 地址：/api/interview/collect_list
- 请求：GET (可以在浏览器地址栏测试)
- 参数：token
- 示例：http://127.0.0.1:4000/api/interview/collect_list
- 响应数据格式: json格式


3. 获取收藏面试题列表（分页）
- 地址：/api/interview/collect_items
- 请求：GET (可以在浏览器地址栏测试)
- 参数：token,page_num,page_size
- 示例：http://127.0.0.1:4000/api/interview/collect_items
- 响应数据格式: json格式


4. 删除收藏面试题名称
- 地址：/api/interview/collect_remove
- 请求：GET (可以在浏览器地址栏测试)
- 参数：topic_id,token
- 示例：http://127.0.0.1:4000/api/interview/collect_remove
- 响应数据格式: json格式


5. 获取收藏面试题列表
- 地址：/api/interview/ishas
- 请求：GET (可以在浏览器地址栏测试)
- 参数：token,topic_id
- 示例：http://127.0.0.1:4000/api/interview/ishas
- 响应数据格式: json格式


### 面试题纠错
1. 添加纠错面试题
- 地址：/api/interview/correction_add
- 请求：POST (不可以在浏览器地址栏测试)
- 参数：topic_id,user_id, topic_question, correction_answer,token
- 示例：http://127.0.0.1:4000/api/interview/correction_add
- 响应数据格式: json格式


2. 获取纠错面试题列表(个人)
- 地址：/api/interview/correction_list
- 请求：GET (可以在浏览器地址栏测试)
- 参数：token
- 示例：http://127.0.0.1:4000/api/interview/correction_list
- 响应数据格式: json格式

3. 获取纠错面试题列表
- 地址：/api/interview/correction_items
- 请求：GET (可以在浏览器地址栏测试)
- 参数：page_num,page_size
- 示例：http://127.0.0.1:4000/api/interview/correction_items
- 响应数据格式: json格式



4. 删除纠错面试题名称
- 地址：/api/interview/correction_remove
- 请求：GET (可以在浏览器地址栏测试)
- 参数：correction_id
- 示例：http://127.0.0.1:4000/api/interview/correction_remove
- 响应数据格式: json格式


### 轮播图
1. 添加
- 地址：/api/banner/add
- 方式: POST
- 参数 imgUrl,href,title
- 示例：http://localhost:4000/api/banner/add
- 响应数据格式： json

2. 删除
- 地址：/api/banner/remove
- 方式: POST
- 参数： id
- 示例：http://localhost:4000/api/banner/remove
- 响应数据格式： json


3. 修改
- 地址：/api/banner/edit
- 方式: POST
- 参数：id,imgUrl,href,title
- 示例：http://localhost:4000/api/banner/edit
- 响应数据格式： json


4. 列表
- 地址：/api/banner/list
- 方式: GET
- 参数：无
- 示例：http://localhost:4000/api/banner/list
- 响应数据格式： json