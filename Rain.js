#pragma strict

var camDrops : ParticleSystem;

function Start()
{
	camDrops.Stop();
}

function OnTriggerEnter(Col : Collider)
{
	if(Col.tag == "Player")
	{
		camDrops.Play();
		Debug.Log("ON");
	}
}

function OnTriggerExit(Col : Collider)
{
	if(Col.tag == "Player")
	{
		camDrops.Stop();
		Debug.Log("OFF");
	}
}