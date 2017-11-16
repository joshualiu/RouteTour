require 'test_helper'

class TripControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get trip_index_url
    assert_response :success
  end

  test "should get create" do
    get trip_create_url
    assert_response :success
  end

  test "should get new" do
    get trip_new_url
    assert_response :success
  end

end
