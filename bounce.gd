extends KinematicBody2D

var velocity = Vector2(200,200)

# Declare member variables here. Examples:
# var a = 2
# var b = "text"

func _physics_process(delta):
	var collision_info = move_and_collide(velocity * delta)
	if collision_info:  #to give elasticity and bounce to ball
		velocity = velocity.bounce(collision_info.normal) 
		velocity.x *= 0.95
		velocity.y *=0.98
		
# Called when the node enters the scene tree for the first time.

# Called every frame. 'delta' is the elapsed time since the previous frame.
