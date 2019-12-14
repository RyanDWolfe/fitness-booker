# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Studio.destroy_all
StudioClass.destroy_all
Reservation.destroy_all

User.create(email: "admin@admin.com", name: "John Doe")
Studio.create(name: "CycleTown", class_type: "Cycling", description: "The best place for cycling in town period. Come check us out when you get a chance.", address: "123 thisway lane")
Studio.create(name: "BoxingPlus", class_type: "Boxing", description: "The best place for boxing this side of town. Bring your own gloves.", address: "444 whereto drive")
Studio.create(name: "Zen Yoga", class_type: "Yoga", description: "Come meditate with us and relax your mind.", address: "324 hereisnow street")