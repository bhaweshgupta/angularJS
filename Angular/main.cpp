#include<bits/stdc++.h>
using namespace std;
int main()
{

    int t;
    cin>>t;
    while(t--)
    {
            
        long long int x;
        int flag=0;
        cin>>x;
        int y,count=0;
        cin>>y;
        char yy=y+48;
        string str =to_string(x);
        char min=str[0];
        int min_ind=0;
        for(int i=0;i<str.length();i++)
        {
            if(str[i]<min)
            {
                min=str[i];
                min_ind=i;
            }
            
        }
        if(min>yy)
        {
            cout<<"hello3";
            flag=1;
            //replace all;
        }
        else if(flag==0)
        {
            cout<<"hello4";
            stack<char> cs;
            cs.push(min);
            for(int i=min_ind+1;i<str.length();i++)
            {
                if(str[i]>=cs.top()&&str[i]<yy)
                {
                    cs.push(str[i]);
                    cout<<"hello5";
                }
                else if(cs.top()<str[i])
                {
                    while(cs.top()<=str[i])
                    {
                        cs.pop();
                        cout<<"hello6";
                    }
                    cs.push(str[i]);
                }
            }
            while(!cs.empty())
            {
                cout<<cs.top();
                cs.pop();
                cout<<"hello7";
            }
            
            
        }
    }

        
    
    
      
      

}
