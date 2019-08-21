---
title: "把linode上的mariadb資料 從ubuntu 1404 的主機 搬到ubuntu 1904下的mysql 5.7"
date: 2019-08-21
tags: [linode,mysql,從ubuntu]
---

## 起因
昨天收到幫朋友管的網站從晚上就開始連不上的消息

中途發現mariadb的連線非常的慢

加上系統老舊很多以前試過的怪東西

想說與其把系統弄乾淨不如直接把資料搬出來

弄到一個乾淨的系統比較快

所以就用mysqldump把整個資料庫dump出來

```bash
mysqldump -u root -p --all-databases > backup.sql;
```
> [參考來源](https://code.yidas.com/mysqldump/)

再用scp 複製到新主機 
```bash
scp backup.sql myuser@192.168.0.1:/path/file2
```
> [參考來源](https://blog.gtwang.org/linux/linux-scp-command-tutorial-examples/)

接著匯入已經裝好mysql 5.7的系統就好了

```bash
# mysql -u root -p < backup.sql
```
> [參考來源](https://code.yidas.com/mysqldump/)

有時候與其釐清問題不如先快速恢復系統

因為在我把系統弄好以後才收到linode的通知信

```
Hello,


Yesterday (August 20, 2019), we detected that there was an issue on the host on which your Linode resides. At around 15:00 (UTC -5), there was an emergency maintenance performed, resulting in short downtime for the Linodes on this host. Our administrators immediately acted upon this issue and the problem affecting your Linode's physical host has been resolved. No further action is required at this time.


On your dashboard, you may notice that a reboot occurred on your Linode at around this timeframe that the emergency maintenance was performed.


We understand downtime can be tough, so we would like to thank you for your patience and understanding throughout this emergency maintenance. We sincerely apologize for any inconvenience this may have caused.


Please let us know if you have any additional questions or concerns.
```
