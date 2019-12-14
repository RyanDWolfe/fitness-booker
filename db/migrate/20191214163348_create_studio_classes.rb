class CreateStudioClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :studio_classes do |t|
      t.string :name
      t.string :type
      t.string :description
      t.integer :occupancy
      t.integer :studio_id

      t.timestamps
    end
  end
end
