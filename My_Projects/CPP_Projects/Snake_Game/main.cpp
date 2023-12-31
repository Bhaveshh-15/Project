#include<iostream>
#include<conio.h>
using namespace std;
bool GameOver;
const int width=20;
const int height=20;
int x,y,fruitx,fruity;
int score;
enum eDirection{STOP=0,LEFT,RIGHT,UP,DOWN};
eDirection dir;
void setup(){
    GameOver=false;
    dir=STOP;
    x=width/2;
    y=width/2; //Center Position

    fruitx=rand()%width;
    fruity=rand()%height;
    score=0;
}
void draw(){
    system("cls");  //To clear Console Window
    //Preparing Border
    for(int i=0;i<width+2;i++)
        cout<<"#";
    cout<<endl;
    for(int i=0;i<height;i++){
        for(int j=0;j<width;j++){
            if(j==0)
                cout<<"#";
            if(i==y&&j==x){
                cout<<"O";
            }
            else if(i==fruity && j==fruitx)
                cout<<"F";
            else
                cout<<" ";
            if(j==width-1){
                cout<<"#";
            }
        }
        cout<<endl;

    }
    for(int i=0;i<width+2;i++)
        cout<<"#";
    cout<<endl;
    cout<<"SCORE:"<<score<<endl;
}
void input(){
    if(_kbhit()){  //Boolean value of key press else 0
        switch(_getch()){  //return ascii character value
            case 'a':
                dir=LEFT;
                break;
            case 'd':
                dir=RIGHT;
                break;
            case 'w':
                dir=UP;
                break;
            case 's':
                dir=DOWN;
                break;
            case 'x':
                GameOver=true;
                break;
        }
    }

}
void logic(){
    switch (dir)
    {
    // case STOP:
    //     break;
    case LEFT:
        x--;
        break;
    case RIGHT:
        x++;
        break;
    case UP:
        y++;
        break;
    case DOWN:
        y--;
        break;
    default:
        break;

    }
    if(x>width||x<0||y>height||y<0){
        GameOver=true;
    }
    if((x==fruitx)&&(y=fruity)){
        score+=10;
        fruitx=rand()%width;
        fruity=rand()%height;
    }
}
int main(){
    setup();
    while(!GameOver){
        draw();
        input();
        logic();
    }
    return 0;
}