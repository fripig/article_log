# 這邊只是備份

這邊主要目的是紀錄

並沒有做太多篩選的動作

想看篩選過的可以到
[twitter](https://twitter.com/fripig)
不過也有些我的碎碎唸就是了

```
docker run --rm   --volume ${pwd}:/src    jojomi/hugo hugo new site src
```



```powershell
docker run --rm --env-file .env --publish-all --volume %cd%/src:/src --volume %cd%/docs:/output jojomi/hugo
```
