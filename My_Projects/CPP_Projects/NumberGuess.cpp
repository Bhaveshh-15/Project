#include<iostream>
#include<cstdlib>
#include<ctime>
using namespace std;

int main(){
    int in,k;
    while(k=1){
        cout<<"Press 1 to play"<<endl;
        cin>>in;
        
        srand(time(0));//Each Random number Different Time
        int random=rand()%100+1;
        int flag;
        
        int guess;
        int attempts=5;
        cout<<"Guess the Number Game "<<endl;
        do{
            cout<<"Enter a guess between 1 to 100"<<endl;
            attempts--;
            cin>>guess;
            if(guess>random){
                cout<<"Oops!! It is larger than correct one"<<endl;
                cout<<"Try Again"<<endl;
            }
            else if(guess<random){
                cout<<"Oops!! It is smaller than correct one"<<endl;
                cout<<"Try Again"<<endl;
            }
            else{
                cout<<"Congratulations. You Did It"<<endl;
                attempts=0;
                 flag=1;
            }
            if(attempts==0 && flag!=1){
                cout<<"Sorry You Loss"<<endl;
                cout<<"Try Again"<<endl;
            }
        }
    while(attempts!=0);
    }
    cout<<"Do You Enjoyed it? Play Again"<<endl;
    
    k=0;
        
    
}