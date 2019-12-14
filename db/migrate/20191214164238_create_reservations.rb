class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :status
      t.integer :user_id
      t.integer :studio_class_id
      t.integer :studio_id

      t.timestamps
    end
  end
end
