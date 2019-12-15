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
StudioClass.create(name: "Cylce60", class_type: "Cycling", description: "60 minute cycling class for hardcore riders.", occupancy: 25, studio_id: 1)
StudioClass.create(name: "Cylce45", class_type: "Cycling", description: "45 minute cycling class for hardcore riders.", occupancy: 50, studio_id: 1)
StudioClass.create(name: "Cylce30", class_type: "Cycling", description: "30 minute cycling class for hardcore riders.", occupancy: 15, studio_id: 1)
StudioClass.create(name: "Boxing for Beginners", class_type: "Boxing", description: "A great place to start learning the techniques of boxing", occupancy: 20, studio_id: 2)
StudioClass.create(name: "Boxing Advanced", class_type: "Boxing", description: "Only for those who have completed boxing for beginners; learn advanced techniques.", occupancy: 20, studio_id: 2)
StudioClass.create(name: "Meditation", class_type: "Yoga", description: "This class is for anyone needed to spend 30 minutes meditating.", occupancy: 40, studio_id: 3)
Reservation.create(status: 1, user_id: 1, studio_class_id: 1, studio_id: 1 )
Reservation.create(status: 1, user_id: 1, studio_class_id: 4, studio_id: 2 )
Reservation.create(status: 2, user_id: 1, studio_class_id: 6, studio_id: 3 )