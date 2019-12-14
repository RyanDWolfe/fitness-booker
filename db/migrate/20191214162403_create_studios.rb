class CreateStudios < ActiveRecord::Migration[5.2]
  def change
    create_table :studios do |t|
      t.string :name
      t.string :type
      t.string :address

      t.timestamps
    end
  end
end
