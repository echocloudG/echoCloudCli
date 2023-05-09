1.查看分支

$ git branch #查看本地分支

$ git branch -r #查看远程分支

$ git branch -a #查看所有分支

$ git branch -vv #查看本地分支及追踪的分支

2.创建分支

$ git branch 分支名 #创建本地分支

将本地分支push，就创建了远程分支

创建本地分支(远程分支对应的分支)并切换到新建的本地分支

$ git checkout -b 分支名 origin/远程分支名 

checkout远程的dev分支，本地创建名为mydev分支，并切换到本地的mydev分支

$ git checkout -b mydev origin/dev #(举例)

3.切换分支

$ git checkout 分支名 #切换本地分支

$ git checkout -b 分支名 #切换远程分支

4.删除分支

$ git branch -d 分支名 #删除本地分支

$ git push origin --delete 分支名 #删除远程分支

5.合并分支

合并前要先切回要并入的分支，以下表示要把dev分支合并入master分支

$ git checkout master #切换到master分支

$ git merge dev #将dev合并到master分支

6.提交换行注释

注释可以通过单引号来换行

$ git commit -m '

1.aaaaa

2.bbbb 
'

$ git merge dev #将dev合并到master分支

$ git commit --amend #查看到刚刚的log信息

7.查看log

$ git log #查看提交历史记录

$ git log --oneline #以精简模式显示

$ git log --pretty=oneline #以精简模式显示

8.撤销操作

$ git status #查看add 中的文件 

$ git reset HEAD #默认是上一次add 里面的全部撤销了 

$ git reset HEAD XXX.js #对某个文件进行撤销了

查看remote地址，远程分支，还有本地分支与之对应的关系等信息

$ git remote show origin

9.本地删除远程不存在分支

$ git remote prune origin

10.git生成ssh密钥

$ git config --global user.name “”

$ git config --global user.email “”

$ ssh-keygen -t rsa -C “自己的邮箱地址”

注意:还可以通过客户端生成git的公私钥

