require 'test_helper'

class StudioClassesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get studio_classes_index_url
    assert_response :success
  end

  test "should get create" do
    get studio_classes_create_url
    assert_response :success
  end

  test "should get update" do
    get studio_classes_update_url
    assert_response :success
  end

  test "should get destroy" do
    get studio_classes_destroy_url
    assert_response :success
  end

end
