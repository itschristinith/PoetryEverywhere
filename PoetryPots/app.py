import os
import time
import requests
import pprint
import json

import sys
from urllib import urlencode
#from mentionScript.py import *
from models import *
import mongoengine
from mongoengine import *
from operator import itemgetter, attrgetter

from flask import Flask, request, redirect, jsonify # Retrieve Flask, our framework
from flask import render_template

app = Flask(__name__)   # create our flask app
# --------- Database Connection ---------
# MongoDB connection to MongoLab's database
mongoengine.connect('mydata', host='mongodb://poetry:everywhere@ds053708.mongolab.com:53708/twitterpoetry')
#app.logger.debug("Connecting to MongoLabs")

from datetime import datetime
# d = datetime.strptime('2011-12-23T20:34:47.000Z','%Y-%m-%dT%H:%M:%S.000Z');
# print d.strftime('%Y-%m-%d');

# allTweets = Tweets.objects.order_by('tweetID') #sort by tweedID 
# print "i got all tweets"

@app.route("/",methods=['GET','POST'])
def display_tweets():
	return render_template("garden (show).html")

@app.route("/gettweets",methods=['GET'])
def get_tweets():

	#print request.args
	newSinceID = request.args.get('sinceID')
	#print newSinceID
	recentTweets = Tweets.objects(tweetID__gt=newSinceID).order_by('tweetID')
	#print "printing length of tweet_data'", len(recentTweets)
	newTweets = []
	# for t in recentTweets:

	# 	tweet_data = {
	# 		#'status' : 'OK',
	# 		'text' : t.text,
	# 		'id' : t.tweetID,

	# 	}
	# #newTweets.append(tweet_data)

	# # data = {
	# # 	# 'newTweets' : newTweets
	# # } 
	
	# return jsonify(status='OK', message=tweet_data)
	
	
	tweetsJsonList = []
	tweetJson = "["
	count = 0
	length = len(recentTweets)
	for t in recentTweets:
		#tweetJson += '{ "id" : "' + t.tweetID +'", "text" : "test"}'
		strippedText = t.text.replace('\"', '');
		strippedText = strippedText.replace('\'', '');
		tweetJson += '{ "id" : "' + t.tweetID +'", "text" : "' + strippedText +'"}'
		count = count + 1
		if (count < length):
			tweetJson += ","
		tweetsJsonList.append(tweetJson)
	print tweetsJsonList
	tweetJson += "]"
	
	theString = ''.join(tweetsJsonList)
	#print theString
		#eval("(" + '{ id : 1223, text : "Some text"}' + ")");

	#make list into string

	#from bill this is working, but couldn't jsonify data
	# tweetJson = "["
	# for t in recentTweets:
	# 	tweetJson = "{ id : " + t.tweetID +", text : " + t.text +"} "

	# 	#eval("(" + '{ id : 1223, text : "Some text"}' + ")");

	# tweetJson += "]"

	#return (status='OK', tweetJson)
	return tweetJson


@app.template_filter('strftime')
def _jinja2_filter_datetime(date, fmt=None):
    pyDate = time.strptime('2011-12-23T20:34:47.000Z','%Y-%m-%dT%H:%M:%S.000Z') # convert twitter date string into python date/time
    return time.strftime('%Y-%m-%d %H:%M:%S', pyDate) # return the formatted date.

# --------- Server On ----------
# start the webserver
if __name__ == "__main__":
	app.debug = True
	
	port = int(os.environ.get('PORT', 5003)) # locally PORT 5000, Heroku will assign its own port
	app.run(host='127.0.0.1', port=port)