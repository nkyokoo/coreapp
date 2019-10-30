using System.Collections;
using System.Collections.Generic;
using SocketIO;
using UnityEngine;

public class network : MonoBehaviour
{
    public GameObject player;
    
    private static SocketIOComponent socket;
    // Start is called before the first frame update
    void Start()
    {
        socket = GetComponent<SocketIOComponent>();
        socket.Emit("user:spawn");
    }

    void OnConnected(SocketIOEvent e)
    {
        Debug.Log("connected");
        socket.Emit("user:test");
        socket.On("user:spawn", spawnplayer);

        
    }
    // Update is called once per frame
    void Update()
    {
        socket.On("user:move", movement);
    }

    public void movement(SocketIOEvent e)
    { 
        JSONObject data = new JSONObject(e.data);
        GameObject player = GameObject.Find(data.GetField("id").ToString());
    }
    public void spawnplayer(SocketIOEvent e)
    {           
        JSONObject data = new JSONObject(e.data);
        GameObject temp = player;
        temp.name = data.GetField("id").ToString();
        Instantiate(temp);
    }
}

