## 需求
1. 实现迷宫中，一个人走迷宫的动画过程
2. 遇到障碍物绕道

## 需求实现思路
1. 生成2维地图(注意让数据变成响应式)
2. 0代表路 1代表人 2代表障碍物 还要一个终点的位置
3. 随机生成012(1为1个2为自己设定的个数,0为其他)
4. 取代1的位置,标记为初始位置,开始判断1与终点的位置判断移动方向
5. 移动采取数值的交换(交换与下一次交换中间设置时间间隔)
6. 终点的判断