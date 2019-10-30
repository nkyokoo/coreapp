using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class player : MonoBehaviour
{
    // Start is called before the first frame update
    public float speed = 1;
    public float jumpForce;
    private Rigidbody rb;
    private bool canDamage;
    private GameObject enemy;
    private int jumpHeight;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    
    }

    void FixedUpdate()
    {
     

      
        if (Input.GetAxis("Horizontal") > 0)
        {   
            
            transform.Translate(Vector2.right * Time.deltaTime * speed);
  

        }
        else if (Input.GetAxis("Horizontal") < 0)
        {
            transform.Translate(Vector2.right * Time.deltaTime * speed);

        }
        
    }
 }

