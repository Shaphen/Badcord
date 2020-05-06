require 'test_helper'

class ChannelsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get channels_index_url
    assert_response :success
  end

  test "should get new" do
    get channels_new_url
    assert_response :success
  end

  test "should get create" do
    get channels_create_url
    assert_response :success
  end

  test "should get show" do
    get channels_show_url
    assert_response :success
  end

  test "should get destroy" do
    get channels_destroy_url
    assert_response :success
  end

end
