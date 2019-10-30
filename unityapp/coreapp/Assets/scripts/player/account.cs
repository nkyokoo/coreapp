using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class account : MonoBehaviour
{
    // Start is called before the first frame update
    private string token = "";
    private string username = "";

    public string getToken()
    {
        return this.token;
    }

    public string getUsername()
    {

        return this.username;
    }

    public void setToken(string token)
    {
        this.token = token;
    }

    public void setUsername(string username)
    {
        this.username = username;
    }
}
