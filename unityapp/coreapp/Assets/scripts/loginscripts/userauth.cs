using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class userauth : MonoBehaviour
{
    public GameObject email = null;
    public GameObject emailnotify = null;
    public GameObject password  = null;
    public GameObject passwordnotify = null;

    private bool isEmpty()
    {
        string[] arr = {email.GetComponent<InputField>().text,password.GetComponent<InputField>().text};

        if (arr[0] == "" || arr[1] == "") 
        {
            emailnotify.SetActive(arr[0] == "");
            passwordnotify.SetActive(arr[0] == "");

            return true;
        }
        else
        {
        
            return false;

        }
    }
    public void login()
    {
        if (!isEmpty())
        {
            Debug.Log(isEmpty());
        }
    }

    public void register()
    {
        
    }
}
