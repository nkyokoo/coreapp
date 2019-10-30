using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using UnityEngine.SceneManagement;


public class userauth : MonoBehaviour
{
    public GameObject email = null;
    public GameObject emailnotify = null;
    public GameObject password  = null;
    public GameObject passwordnotify = null;
    public GameObject account = null;

    private bool isEmpty()
    {
        string[] arr = {email.GetComponent<InputField>().text,password.GetComponent<InputField>().text};

        if (arr[0] == "" || arr[1] == "") 
        {

            if (arr[0] == "")
            {
                Debug.Log(arr[0]);
                emailnotify.GetComponent<Text>().text = "email empty";
                
            }
            if (arr[1] == "")
            {
                Debug.Log(arr[1]);
                passwordnotify.GetComponent<Text>().text = "password empty";
                
            }
            return true;
        }
        else
        {              
            Debug.Log(arr[0]);
            Debug.Log(arr[1]);
            emailnotify.GetComponent<Text>().text = " ";
            passwordnotify.GetComponent<Text>().text = " ";

            return false;

        }
    }
    public void login()
    {
        if (!isEmpty())
        {    
            StartCoroutine(Upload());

        }
      
     
    }
   

    IEnumerator Upload()
    {
        JSONObject json = new JSONObject();
        json.AddField("email", email.GetComponent<InputField>().text);
        json.AddField("password", password.GetComponent<InputField>().text);

        UnityWebRequest www = UnityWebRequest.Post("http://localhost:3333/user/login", json);
        yield return www.SendWebRequest();

        if (www.isNetworkError || www.isHttpError)
        {
            Debug.Log(www.error);
        }
        else
        {
            Debug.Log(www.downloadHandler.text);
            JSONObject data = new JSONObject(www.downloadHandler.text); 
            string token = data.GetField("data").GetField("token").ToString();
            account.GetComponent<account>().setToken(token);
            SceneManager.LoadScene(1);


        }
    }

    public void register()
    {
        
    }
}
