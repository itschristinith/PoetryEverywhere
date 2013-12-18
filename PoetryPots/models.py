# mongoengine database module
from mongoengine import *
import logging

class Tweets(Document):

	timestamp = DateTimeField()
	tweetID = StringField()
	#hashtag = StringField()
	text = StringField()
	username = StringField()
	sentiment = StringField()
	created = StringField()


