# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
## usersテーブル
|column|Type|Options|
|------|----|-------|
|name|text|null: faise|
|Email|string|null: false,unique: true|
|Password|string|null: false|

### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :messages

## groupsテーブル
|column|Type|Options|
|------|----|-------|
|name|text|null: false|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :messages

## messagesテーブル
|column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groups_usersテーブル
|column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true |
|user_id|integer|null: false, foreign_key: true |

### Association
- belongs_to :group
- belongs_to :user

* Database initialization

* How to run the test suite

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
