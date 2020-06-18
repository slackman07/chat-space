# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|references|null: false, foreign_key: true|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :messages
- has_many :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|integer|null: false|
|groupname|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|comment|string|
|image|string|

### Association
- belongs_to :user