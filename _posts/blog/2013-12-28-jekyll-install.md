---

layout: blog

title: 手动测试

description: 安装jekyll的命令

category: blog

---

###然后用Gem安装jekyll
	
	sudo gem install jekyll
	
	gem install jekyll rdiscount
	
	jekyll --server
	

###jekyll支持table的方案

_config.yml中加入下面代码

	redcarpet:
	extensions: ["no_intra_emphasis", "fenced_code_blocks", "autolink", "tables", "with_toc_data"]


