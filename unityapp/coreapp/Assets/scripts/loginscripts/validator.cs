using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class validator : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject loginbtn  = null;

    public void validation()
    {

        if (!validateEmail(GetComponent<InputField>().text.ToString()))
        {
            loginbtn.GetComponent<Button>().interactable = false;  
        }
        else
        {
            loginbtn.GetComponent<Button>().interactable = true;
        }
        
    }   
    private bool validateEmail(string email)
    {
        try {
            var addr = new System.Net.Mail.MailAddress(email);
            Debug.Log("email valid");
            return addr.Address == email;

        }
        catch(Exception e) {
            Debug.Log("email not valid");
            return false;
        }
        
    }
}
