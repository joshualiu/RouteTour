class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :destination
      t.text :description
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end

    add_reference :trips, :user, index: true, foreign_key: true
  end
end
